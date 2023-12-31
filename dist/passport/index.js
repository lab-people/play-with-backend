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
Object.defineProperty(exports, "__esModule", { value: true });
const passport_local_1 = require("passport-local");
const passport_jwt_1 = require("passport-jwt");
const connect_1 = require("../config/connect");
const user_entity_1 = require("../entities/user.entity");
const userRepository = connect_1.AppDataSource.getRepository(user_entity_1.User);
// JWT Secret Key (should be stored securely)
const JWT_SECRET_KEY = 'your-secret-key';
exports.default = (passport) => {
    // Passport 설정
    passport.use(new passport_local_1.Strategy((username, password, done) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield userRepository.findOne({ where: { name: username, password: password } });
        if (user) {
            return done(null, user);
        }
        return done(null, false, { message: '아이디 또는 비밀번호가 올바르지 않습니다.' });
    })));
    // Passport JWT strategy
    const jwtOptions = {
        jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: JWT_SECRET_KEY,
    };
    passport.use(new passport_jwt_1.Strategy(jwtOptions, (payload, done) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield userRepository.findOne({ where: { userId: payload.sub } });
        if (user) {
            return done(null, user);
        }
        else {
            return done(null, false);
        }
    })));
};
