import mongoose from 'mongoose';

const { Schema } = mongoose;

const Player = new Schema({
  name: {
    type: String,
    require: true,
  },
  number: {
    type: Number,
    require: true,
  }
});

const Clubs = new Schema({
  name: {
    type: String,
    require: true,
  },
  shortname: {
    type: String,
    require: true,
  },
  coach: {
    type: String,
    require: true,
  },
  players: {
    type: [Player],
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: 0,
  },
  stadium: {
    type: {
      name: String,
      img: {
        type: String,
        default: 'https://www.bundesliga.com/assets/stadiums/stadium-fcb.jpg'
      },
    },
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  logo: {
    type: String,
    require: true
  },
  social: {
    type: {
      facebook: String,
      twitter: String,
    },
    require: true,
  },
  css: {
    type: {
      bg: String,
      color: String
    },
    require: true
  }
});

export default mongoose.model('Clubs', Clubs);