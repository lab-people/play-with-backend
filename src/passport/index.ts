import passport, { PassportStatic } from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import { AppDataSource } from '../config/connect';
import { User } from '../entities/user.entity';

const userRepository = AppDataSource.getRepository(User)

// JWT Secret Key (should be stored securely)
const JWT_SECRET_KEY = 'your-secret-key';
export default (passport: PassportStatic) => {
  // Passport 설정
  passport.use(new LocalStrategy(async (username, password, done) => {
    const user = await userRepository.findOne({where: {name:username, password: password}})
    
    if (user) {
      return done(null, user);
    }
  
    return done(null, false, { message: '아이디 또는 비밀번호가 올바르지 않습니다.' });
  }));
  
  // Passport JWT strategy
  const jwtOptions = {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: JWT_SECRET_KEY,
  };
  
  passport.use(new JwtStrategy(jwtOptions, async (payload, done) => {
    const user = await userRepository.findOne({where: {userId: payload.sub}});
      if (user) {
        return done(null, user);
  
      } else {
        return done(null, false);
      }
  }));
}