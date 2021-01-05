import mongoose from 'mongoose';

const { Schema } = mongoose;

const usersSchema = new Schema({
  username: {
    type: String,
    require: true,
  },
  fullname: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  }
});

export default mongoose.model('Users', usersSchema);
