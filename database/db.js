const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drum-machine');

const db = mongoose.connection;

const compositionSchema = mongoose.Schema({
  username: String,
  compositionName: String,
  pattern: {
    'kick': Array,
    'clap': Array,
    'snary': Array,
    'openHat': Array,
    'closedHat': Array,
  },
  swing: Number,
  bpm: Number,
});

var Composition = mongoose.model('Composition', compositionSchema);
