const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drum-machine');

const db = mongoose.connection;

const compositionSchema = mongoose.Schema({
  username: String,
  compositionName: String,
  pattern: {
    'kick': Array,
    'clap': Array,
    'snare': Array,
    'openHat': Array,
    'closedHat': Array,
  },
  swing: Number,
  bpm: Number,
});

const Composition = mongoose.model('Composition', compositionSchema);

const storeComposition = function(data) {
  const composition = new Composition(data);
  composition.save((err, composition) => {
    if (err) { return console.error(err); }
    console.log('sucessfully saved ', composition.username, composition.compositionName);
  });
}

const fetchComposition = function(username, compositionName) {
  console.log(`fetching composition with username ${username} and compositionName ${compositionName}`);
  return Composition.findOne({
    username: username, 
    compositionName: compositionName
  });
}

module.exports = {
  storeComposition,
  fetchComposition,
}
