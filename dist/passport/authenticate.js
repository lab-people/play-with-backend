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
exports.authenticateLocal = exports.authenticateJwt = void 0;
const passport_1 = __importDefault(require("passport"));
const jsonwebtoken_1 = require("jsonwebtoken");
// JWT Secret Key (should be stored securely)
const JWT_SECRET_KEY = 'your-secret-key';
const authenticateJwt = (req, res, next) => {
    return passport_1.default.authenticate('jwt', { session: false }, (err, user) => __awaiter(void 0, void 0, void 0, function* () {
        if (user) {
            req.user = user;
            return next();
        }
        else {
            return res.status(401).json({ message: '토큰이없습니다.' });
        }
    }))(req, res, next);
};
exports.authenticateJwt = authenticateJwt;
const authenticateLocal = (req, res, next) => {
    return new Promise((resolve, reject) => {
        passport_1.default.authenticate('local', { session: false }, (err, user, info) => {
            if (err || !user) {
                // reject(err);
                res.status(401).json({ message: 'Authentication failed' });
            }
            else {
                const token = (0, jsonwebtoken_1.sign)({ sub: user.id }, JWT_SECRET_KEY, { expiresIn: '1h' });
                resolve({ token });
            }
        })(req, res, next);
    });
};
exports.authenticateLocal = authenticateLocal;
