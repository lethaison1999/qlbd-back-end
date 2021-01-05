import usersModel from '../models/usersSchema';
import bcrypt from 'bcrypt';

export const findAll = async () => {
  try {
    const users = await usersModel.find();

    return users;
  } catch (error) {
    Promise.reject(error);
  }
}

export const findUserLogin = async (username, password) => {
  try {
    const user = await usersModel.findOne({
      username
    });

    const isValidUser = user && await bcrypt.compare(password, user.password);

    if (isValidUser) {
      delete user.password;
      return user;
    }

    return null;
  } catch (error) {
    Promise.reject(error);
  }
}

export const findOne = async (_id) => {
  try {
    const user = await usersModel.findOne({ _id });

    if (!user) {
      return Promise.reject({
        code: 404,
        message: 'User not found'
      });
    }

    return user;
  } catch (error) {
    Promise.reject(error);
  }
}