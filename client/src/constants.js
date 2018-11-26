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

const defaultTracks = {
  bars: 1,
  instruments: {
    kick: {
      volume: 1,
      pattern: new Array(16).fill(0),
    },
    clap: {
      volume: 0.8,
      pattern: new Array(16).fill(0),
    },
    snare: {
      volume: 1,
      pattern: new Array(16).fill(0),
    },
    openHat: {
      volume: 0.5,
      pattern: new Array(16).fill(0),
    },
    closedHat: {
      volume: 0.5,
      pattern: new Array(16).fill(0),
    },
  }
}

module.exports = {
  DefaultPattern,
  defaultVolumes,
  defaultInstruments,
  defaultTracks,
};
