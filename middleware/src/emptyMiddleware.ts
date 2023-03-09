import { Request, Response, NextFunction } from "express";

const emptyMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log('pass empty middleware');
    next();
}

export { emptyMiddleware };