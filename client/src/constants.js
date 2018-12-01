const generateDefaultTracks = () => ({
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
  },
});

module.exports = {
  generateDefaultTracks,
};
