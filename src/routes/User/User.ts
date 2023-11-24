import { NextFunction, Request, Response } from "express";
import { authenticateLocal } from "../../passport/authenticate";
import { AppDataSource } from "../../config/connect";
import { User } from "../../entities/user.entity";

const userRepository = AppDataSource.getRepository(User);
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
  const user = req.user;
  console.log(user);
  res.status(200).json({ message: "조회성공", result: user });
};

/**
 * 로그인
 * @param req
 * @param res
 * @param next
 */
export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = req.user;
    const getToken = await authenticateLocal(req, res, next);
    console.log("token", getToken);
    res.status(200).json({ message: "조회성공", result: getToken });
  } catch (error) {
    res.status(500).json({ message: "서버에러", result: error });
  }
};
/**
 * 회원가입
 * @param req
 * @param res
 * @param next
 */
export const addUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userData = req.body;
    const user = new User();
    user.name = userData.name;
    user.birth = userData.birth;
    user.email = userData.email;
    user.gender = userData.gender;
    user.nickName = userData.nickName;
    user.password = userData.password;
    await userRepository.save(user);
    res.status(200).json({ message: "등록성공", result: {} });
  } catch (error) {
    res.status(500).json({ message: "서버에러", result: error });
  }
};

export const getTest = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(200).json({ message: "테스트", result: {} });
  } catch (error) {
    res.status(500).json({ message: "서버에러", result: error });
  }
};
