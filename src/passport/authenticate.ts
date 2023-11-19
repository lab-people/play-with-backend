import passport from "passport";
import { sign } from 'jsonwebtoken';
import { IVerifyOptions } from "passport-local";
import { NextFunction, Request, Response } from "express";

interface User {
    id: string;
    username: string;
    password: string;
}

// JWT Secret Key (should be stored securely)
const JWT_SECRET_KEY = 'your-secret-key';

export const authenticateJwt = (req:Request, res:Response, next:NextFunction) => {
    return passport.authenticate('jwt', {session: false}, async (err: any, user: User | false) => {
        if(user){            

            req.user = user;
            return next(); 
        }else{
            
            return res.status(401).json({message:'토큰이없습니다.'})       
        }
    })(req, res, next);
}  
export const authenticateLocal =  (req:Request, res:Response, next:NextFunction) => {
    return new Promise((resolve, reject) => {
        passport.authenticate('local', { session: false }, (err: any, user: User | false, info: IVerifyOptions) => {
           if (err || !user) {
                // reject(err);
                res.status(401).json({ message: 'Authentication failed' });
           }else{
                const token = sign({ sub: user.id }, JWT_SECRET_KEY, { expiresIn: '1h' });
                resolve({token})
           }
         })(req, res, next);
    }
)}
