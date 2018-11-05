const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI || 'mongodb://localhost/drum-machine';
console.log('uri', uri)
mongoose.connect(uri);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

const compositionSchema = mongoose.Schema({
  username: String,
  compositionName: String,
  pattern: {
    kick: Array,
    clap: Array,
    snare: Array,
    openHat: Array,
    closedHat: Array,
  },
  swing: Number,
  bpm: Number,
  volumes: {
    kick: Number,
    clap: Number,
    snare: Number,
    openHat: Number,
    closedHat: Number,
  },
});

const Composition = mongoose.model('Composition', compositionSchema);

const storeComposition = function (data) {
  console.log('updating this...');
  console.log(data);
  // const composition = new Composition(data);
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
