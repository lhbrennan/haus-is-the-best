const mongoose = require('mongoose');
// how will you handle credentials in deployment (this environment variables)
mongoose.connect('mongodb://localhost/drum-machine');

const db = mongoose.connection;

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
  console.log('data to save', data);
  const composition = new Composition(data);
  composition.save((err, updatedComposition) => {
    if (err) { return console.error(err); }
    console.log('sucessfully saved ',
      updatedComposition.username,
      updatedComposition.compositionName);
  });
};

const fetchComposition = function(username, compositionName) {
  return Composition.findOne({
    username,
    compositionName,
  });
};

module.exports = {
  storeComposition,
  fetchComposition,
}
