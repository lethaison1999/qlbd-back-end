import passportJwt from 'passport-jwt';
import { configs } from '../configs/configs';
import * as usersService from '../services/usersService';

const { Strategy, ExtractJwt } = passportJwt;

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: configs.jwtSecretKey
};

export const JwtStrategy = new Strategy(options, async (payloads, done) => {
  try {
    const _id = payloads._id;
    const user = await usersService.findOne(_id);

    return done(null, {
      _id: user._id,
      username: user.username,
      fullname: user.fullname
    });
  } catch (err) {
    return done({
      code: 401,
      message: 'Unauthorized'
    }, false);
  }
});
