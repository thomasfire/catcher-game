import express, {Express} from 'express';
import path from 'path';
import {HttpLogger, pinoHttp} from "pino-http";

import {indexRouter} from './routes';
import {leaderboardRouter} from "./routes/leaderboard";
import {BIND_PORT} from "./config";

const app: Express = express();
export const logger: HttpLogger = pinoHttp();

app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/static", express.static(path.join(__dirname, './public')));


app.use('/', indexRouter);
app.use('/leaderboard', leaderboardRouter);


app.listen(BIND_PORT, () => {
    logger.logger.info(`Server is running on port ${BIND_PORT}`)
})
