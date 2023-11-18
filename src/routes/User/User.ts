import { NextFunction, Request, Response } from "express";
/**
 * 회원조회
 * @param req 
 * @param res 
 * @param next 
 */
export const getUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    res.status(200).json({ message: "조회성공", result: "test" });
};
  
// 로그인 추가