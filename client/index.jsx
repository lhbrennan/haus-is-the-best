import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './store';
import App from './App.jsx';

const store = createStore(
  {
    playing: false,
    bars: 1,
    bpm: 120,
    resolution: 16, // steps per bar
    pattern: defaultPattern,
    padResponse: false,
    swing: 2.5,
    overallVolume: 1,
    volumes: {
      kick: 1,
      clap: 0.8,
      snare: 1,
      openHat: 0.5,
      closedHat: 0.5,
    },
  },
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
