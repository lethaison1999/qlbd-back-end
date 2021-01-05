import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import usersRouter from './routes/users';
import passport from 'passport';
import { LocalStrategy } from './middlewares/local';
import { JwtStrategy } from './middlewares/jwt';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import clubsRouter from './routes/clubs';
import matchesRouter from './routes/matchs';
import seasonsRouter from './routes/seasons';

const app = express();

dotenv.config();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

passport.serializeUser(function (user, done) {
  done(null, user._id);
});

passport.deserializeUser(function (id, done) {
  done(err, { _id });
});

app.use(passport.initialize());
app.use(passport.session());

passport.use(LocalStrategy);
passport.use(JwtStrategy);

app.use('/users', usersRouter);
app.use('/clubs', clubsRouter);
app.use('/matches', matchesRouter);
app.use('/seasons', seasonsRouter);

const createLog = (req, res, next) => {
  const error = new Error('URL not found');
  error.status = 404;
  next(error);
}
app.use(createLog);

const exceptionHandler = (err, req, res, next) => {
  return res.status(err.code || 500).json({
    message: err.message
  });
};

app.use(exceptionHandler);

mongoose.connect(process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connect mongodb successfully!');
  })
  .catch(err => console.log(err));

const port = process.env.PORT;

app.listen(port, () => {
  console.log('Server is running at port ', port);
})

module.exports = app;
