const DefaultPattern = function () {
  this.kick = new Array(16).fill(0);
  this.clap = new Array(16).fill(0);
  this.snare = new Array(16).fill(0);
  this.openHat = new Array(16).fill(0);
  this.closedHat = new Array(16).fill(0);
};

const defaultVolumes = {
  kick: 1,
  clap: 0.8,
  snare: 1,
  openHat: 0.5,
  closedHat: 0.5,
};

const defaultInstruments = ['kick', 'clap', 'snare', 'openHat', 'closedHat'];

module.exports = {
  DefaultPattern,
  defaultVolumes,
  defaultInstruments,
};
