import jwt from 'jsonwebtoken';
import { configs } from '../configs/configs';

export const generateToken = async (payloads) => {
  return jwt.sign(payloads, configs.jwtSecretKey, { expiresIn: '1800s' });
}

