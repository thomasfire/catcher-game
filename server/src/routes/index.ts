import {NextFunction, Router, Response, Request} from 'express';
import path from "path";

export let indexRouter: Router = Router();

indexRouter.get('/',  (_req: Request, res: Response, _next: NextFunction): void => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
