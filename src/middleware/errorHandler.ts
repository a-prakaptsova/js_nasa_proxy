import type { Request, Response, NextFunction } from 'express';
import { type Exception } from '../utils/exceptions/Exception';

export const pageNotFoundHandler = (req: Request, res: Response) => {
    res.status(404).render('pageNotFound.njk');
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const exceptionHandler = (err: Exception, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status ?? 500).render('exception.njk', { errorMsg: err.message });
};

export const errorLogger = (err: Exception, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    next(err);
};
