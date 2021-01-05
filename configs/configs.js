import dotenv from 'dotenv';
import * as fs from 'fs';

const buf = fs.readFileSync('.env');
const vars = dotenv.parse(buf);

export const configs = {
  jwtSecretKey: vars.JWT_SECRET_KEY,
  port: vars.PORT,
  mongoUrl: vars.MONGO_URL
}
