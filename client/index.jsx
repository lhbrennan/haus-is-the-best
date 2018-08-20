import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './store';
import App from './App';
import AudioPlayer from './containers/AudioPlayer';

// kind of hacky defining this outside the App component...
const defaultPattern = {
  kick: new Array(64).fill(0),
  clap: new Array(64).fill(0),
  snare: new Array(64).fill(0),
  openHat: new Array(64).fill(0),
  closedHat: new Array(64).fill(0),
};

const store = createStore(
  {
    playing: false,
    bars: 2,
    bpm: 120,
    username: 'lhb',
    compositionName: 'composition1',
    instruments: ['kick', 'clap', 'snare', 'openHat', 'closedHat'],
    resolution: 16, // steps per bar
    pattern: defaultPattern,
    padResponse: true,
    swing: 2.5,
    overallVolume: 1,
    volumes: {
      kick: 1,
      clap: 0.8,
      snare: 1,
      openHat: 0.5,
      closedHat: 0.5,
    },
    eventQueue: [],
    visibleBar: 1,
  },
);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
      <AudioPlayer />
    </div>
  </Provider>,
  document.getElementById('app'),
);
