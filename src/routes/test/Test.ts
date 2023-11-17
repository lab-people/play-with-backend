import { NextFunction, Request, Response } from "express";
/**
 * test 조회
 * @param req
 * @param res
 * @param next
 */
export const getTest = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(200).json({ message: "조회성공", result: "test" });
};
