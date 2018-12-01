const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI || 'mongodb://localhost/drum-machine';
mongoose.connect(uri);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

const compositionSchema = mongoose.Schema({
  username: String,
  compositionName: String,
  tracks: {
    bars: Number,
    instruments: {
      kick: {
        volume: Number,
        pattern: Array,
      },
      clap: {
        volume: Number,
        pattern: Array,
      },
      snare: {
        volume: Number,
        pattern: Array,
      },
      openHat: {
        volume: Number,
        pattern: Array,
      },
      closedHat: {
        volume: Number,
        pattern: Array,
      },
    },
  },
  swing: Number,
  bpm: Number,
});

const Composition = mongoose.model('Composition', compositionSchema);

const storeComposition = function (data) {
  console.log('data to save', data);
  const { username, compositionName } = data;
  Composition.findOneAndUpdate(
    { username, compositionName },
    data,
    { upsert: true, new: true },
    (err, doc) => {
      if (err) {
        console.error('Problem with upsert');
        console.log(err);
      } else {
        console.log('successful upsert\n', doc);
      }
    },
  );
};

const fetchComposition = function (username, compositionName) {
  return Composition.findOne({
    username,
    compositionName,
  });
};

module.exports = {
  storeComposition,
  fetchComposition,
};
