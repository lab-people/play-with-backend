import passport, { PassportStatic } from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';

// 예제 사용자 데이터 (실제 사용자 데이터로 교체해야 함)
const users = [
    { id: '1', username: 'testuser', password: 'password' },
];
// JWT Secret Key (should be stored securely)
const JWT_SECRET_KEY = 'your-secret-key';
export default (passport: PassportStatic) => {
  // Passport 설정
  passport.use(new LocalStrategy((username, password, done) => {
      const user = users.find(u => u.username === username && u.password === password);
    
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
  
  passport.use(new JwtStrategy(jwtOptions, (payload, done) => {
      const user = users.find(u => u.id === payload.sub);
    
      if (user) {
        return done(null, user);
  
      } else {
        return done(null, false);
      }
  }));
}