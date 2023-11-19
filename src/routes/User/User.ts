import { NextFunction, Request, Response } from "express";
import { authenticateLocal } from "../../passport/authenticate";
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
    const user = req.user
    console.log(user)
    res.status(200).json({ message: "조회성공", result: "user" });
};
  
// 로그인 추가
export const login = async (
  req: Request,
  res: Response,
  next: NextFunction) => {
    const user = req.user
    console.log(user)
    const getToken = await authenticateLocal(req, res, next)
    console.log('token', getToken)
    res.status(200).json({ message: "조회성공", result: getToken });
}