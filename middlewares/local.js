import { Strategy } from 'passport-local';
import * as usersService from '../services/usersService';

export const LocalStrategy = new Strategy(async (username, password, done) => {
  try {
    const user = await usersService.findUserLogin(username, password);

    if (!user) {
      return done({
        code: 401,
        message: 'Unauthorized'
      }, null);
    }

    return done(null, {
      _id: user._id,
      username: user.username,
      fullname: user.fullname
    });
  } catch (err) {
    return done({
      code: 401,
      message: 'Unauthorized'
    }, null)
  }
});
