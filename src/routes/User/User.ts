import { NextFunction, Request, Response } from "express";
import { authenticateLocal } from "../../passport/authenticate";
import { AppDataSource } from "../../config/connect";
import { User } from "../../entities/user.entity";
import bcrypt from "bcryptjs";
import {AuthMail} from "../../entities/authMail.entity";
const userRepository = AppDataSource.getRepository(User);
const authMailRepository = AppDataSource.getRepository(AuthMail);
export const authMail = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
  try {
    const {email, code} = req.body;

    const findAuthMail = await authMailRepository.findOne({
      where: {
        email: email
      }
    });
    if (!findAuthMail) {
      return res.status(200).json({message: "존재하지 않는 이력입니다."})
    }
    if (code === findAuthMail.authNumber) {
      await authMailRepository.update(findAuthMail.id, {
        cmplYn: true
      })
    }

    res.status(200).json({ message: "업데이트 성공", result: {} });
  } catch (error: any) {
    console.error(error.message)
    res.status(500).json({ message: "서버에러", result: error });
  }
};
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

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(userData.password.toString(), salt);
    user.name = userData.name;
    user.email = userData.email;
    user.password = hash;
    await userRepository.save(user);
    res.status(200).json({ message: "등록성공", result: {} });
  } catch (error: any) {
    console.error(error.message)
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