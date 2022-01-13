export default router;
import express, { Request, Response, NextFunction, request } from "express";

function router(options = {}) {
  // @ts-ignore
  const router = new express.Router(options);
  return router
    .get('/', (req: Request, res: Response, next: NextFunction) => {
      res.render('index');
    });
}