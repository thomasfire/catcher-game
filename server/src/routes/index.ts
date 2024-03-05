import {NextFunction, Router, Response, Request} from 'express';

export const indexRouter: Router = Router();

indexRouter.get('/',  (req: Request, res: Response, next: NextFunction): void => {
  res.render('index', {title: 'Express'});
});

