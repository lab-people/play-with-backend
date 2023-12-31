"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTest = exports.addUser = exports.login = exports.getUser = void 0;
const authenticate_1 = require("../../passport/authenticate");
const connect_1 = require("../../config/connect");
const user_entity_1 = require("../../entities/user.entity");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const userRepository = connect_1.AppDataSource.getRepository(user_entity_1.User);
/**
 * 회원조회
 * @param req
 * @param res
 * @param next
 */
const getUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    console.log(user);
    res.status(200).json({ message: "조회성공", result: user });
});
exports.getUser = getUser;
/**
 * 로그인
 * @param req
 * @param res
 * @param next
 */
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.user;
        const getToken = yield (0, authenticate_1.authenticateLocal)(req, res, next);
        console.log("token", getToken);
        res.status(200).json({ message: "조회성공", result: getToken });
    }
    catch (error) {
        res.status(500).json({ message: "서버에러", result: error });
    }
});
exports.login = login;
/**
 * 회원가입
 * @param req
 * @param res
 * @param next
 */
const addUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        const user = new user_entity_1.User();
        const salt = bcryptjs_1.default.genSaltSync(10);
        const hash = bcryptjs_1.default.hashSync(userData.password, salt);
        user.name = userData.name;
        user.email = userData.email;
        user.password = hash;
        yield userRepository.save(user);
        res.status(200).json({ message: "등록성공", result: {} });
    }
    catch (error) {
        res.status(500).json({ message: "서버에러", result: error });
    }
});
exports.addUser = addUser;
const getTest = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({ message: "테스트", result: {} });
    }
    catch (error) {
        res.status(500).json({ message: "서버에러", result: error });
    }
});
exports.getTest = getTest;
