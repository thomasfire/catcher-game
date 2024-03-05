import {NextFunction, Router, Response, Request} from 'express';
import {Redis} from "ioredis";
import {KEY, LEADERBOARD_SIZE, URL} from "./redis";
import {logger} from "../app";
import {constants} from "node:http2";

export const leaderboardRouter: Router = Router();

const redis: Redis = new Redis(URL);

class LeaderBoardResponseEntry {
    score: number;
    username: string;

    constructor(score: number, username: string) {
        this.score = score;
        this.username = username;
    }
}

class LeaderBoardResponseType {
    leaders: LeaderBoardResponseEntry[];

    constructor(redisZrangeOutput: string[]) {
        this.leaders = [];
        for (const [username, score] of redisZrangeOutput) {
            this.leaders.push(new LeaderBoardResponseEntry(Number(score), username))
        }
    }
}

leaderboardRouter.get('/leaderboard', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const leadersData: string[] = await redis.zrange(KEY, 0, 100, "BYSCORE", "REV", "WITHSCORES").catch((reason: any) => {
        logger.logger.error(`Getting ${KEY} failed: ${reason}`);
        return [];
    });
    res.status(constants.HTTP_STATUS_OK).json(new LeaderBoardResponseType(leadersData));
});

leaderboardRouter.post('/leaderboard', async (req: Request<{}, {}, LeaderBoardResponseEntry>, res: Response, next: NextFunction): Promise<void> => {
    const score: number = req.body.score;
    const username: string = req.body.username;
    redis.zadd(KEY, "NX", score, username).then((added: number) => {
        logger.logger.info(`Added entries: ${added}`)
    }).then(() => redis.zremrangebyrank(KEY, 0, -LEADERBOARD_SIZE))
        .then((removed: number) => {
            logger.logger.info(`Removed entries: ${removed}`);
        });

    res.status(constants.HTTP_STATUS_CREATED);
});
