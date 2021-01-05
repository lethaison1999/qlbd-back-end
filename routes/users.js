import express from 'express';
import passport from 'passport';
import { generateToken } from '../middlewares/jwtProvider';
import * as userService from '../services/usersService';

const router = express.Router();

router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res) => {
  try {
    res.json({
      data: req.user
    });
  } catch (err) {
    return Promise.reject(err); 
  }
});

router.post('/login', passport.authenticate('local'), async (req, res) => {
  try {
    const user = req.user;
    const payloads = {
      _id: user._id,
      username: user.username,
      fullname: user.fullname
    };

    const token = await generateToken(payloads);

    res.json({
      data: {
        token
      }
    });
  } catch (err) {
    return Promise.reject(err);
  }
});

router.get('/', async (req, res ) => {
  try {
    const users = await userService.findAll();

    res.json({
      data: users,
    });
  } catch (error) {
    return Promise.reject(error);
  }
});

export default router;
