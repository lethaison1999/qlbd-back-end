import mongoose from 'mongoose';

const { Schema } = mongoose;

const seasonSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  year: {
    type: Number,
    require: true,
  }
});

export default mongoose.model('Seasons', seasonSchema);
