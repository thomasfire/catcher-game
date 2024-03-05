import express, {Express} from 'express';
import path from 'path';
import {HttpLogger, pinoHttp} from "pino-http";

import {indexRouter} from './routes';
import {leaderboardRouter} from "./routes/leaderboard";

const port: number = 3000;
const app: Express = express();
export const logger: HttpLogger = pinoHttp();

app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/leaderboard', leaderboardRouter);

app.listen(port, () => {
    logger.logger.info(`Server is running on port ${port}`)
})
