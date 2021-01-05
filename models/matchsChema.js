import mongoose from 'mongoose';
import clubsSchema from './clubsSchema';
import seasonSchema from './seasonSchema';

const { Schema } = mongoose;

const Match = new Schema({
  homeClubId: {
    type: String,
    ref: clubsSchema,
    require: true,
  },
  awayClubId: {
    type: String,
    ref: clubsSchema,
    require: true,
  },
  result: {
    type: {
      halfTime: {
        home: Number,
        away: Number,
      },
      fullTime: {
        home: Number,
        away: Number,
      }
    },
    require: true
  },
  score: {
    type: [
      {
        player: String,
        number: Number,
        minutes: Number
      }
    ]
  },
  seasonId: {
    type: String,
    ref: seasonSchema,
    require: true,
  },
  playTime: {
    type: Date,
    require: true
  },
  played: {
    type: Boolean,
    require: true,
  }
});

export default mongoose.model('Matchs', Match);