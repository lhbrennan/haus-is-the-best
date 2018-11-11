import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import AudioPlayer from './components/AudioPlayer';
import createStore from './store';
import { DefaultPattern } from './constants';

const store = createStore(
  {
    playing: false,
    bars: 1,
    bpm: 120,
    username: 'demo',
    compositionName: 'techno-1',
    instruments: ['kick', 'clap', 'snare', 'openHat', 'closedHat'],
    resolution: 16, // steps per bar
    pattern: new DefaultPattern(),
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
