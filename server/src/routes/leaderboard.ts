import {NextFunction, Router, Response, Request} from 'express';
import {Redis} from "ioredis";
import {logger} from "../app";
import {constants} from "node:http2";
import {LeaderBoardResponseEntry, LeaderBoardResponseType} from "../../../lib/leaderboardTypes";
import {LEADERBOARD_SIZE, REDIS_KEY, REDIS_URL} from "../config";


export let leaderboardRouter: Router = Router();

const redis: Redis = new Redis(REDIS_URL);

leaderboardRouter.get('/get', async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    logger.logger.info("/leaderboard/get")
    const leadersData: string[] = await redis.zrange(REDIS_KEY, 0, 100, "REV", "WITHSCORES")
        .then((res) => {
            logger.logger.debug(res)
            return res
        })
        .catch((reason: any) => {
            logger.logger.error(`Getting ${REDIS_KEY} failed: ${reason}`);
            return [];
        });
    logger.logger.debug(leadersData)
    res.status(constants.HTTP_STATUS_OK).json(new LeaderBoardResponseType(leadersData));
});

leaderboardRouter.post('/create', async (req: Request<{}, {}, LeaderBoardResponseEntry>, res: Response, _next: NextFunction): Promise<void> => {
    const score: number = req.body.score;
    const username: string = req.body.username;

    logger.logger.info(`/leaderboard/create score=${score} username=${username}`)
    redis.zadd(REDIS_KEY, "NX", score, username).then((added: number) => {
        logger.logger.info(`Added entries: ${added}`)
    }).then(() => redis.zremrangebyrank(REDIS_KEY, 0, -LEADERBOARD_SIZE - 1))
        .then((removed: number) => {
            logger.logger.info(`Removed entries: ${removed}`);
        });

    res.status(constants.HTTP_STATUS_CREATED).json({});
});
