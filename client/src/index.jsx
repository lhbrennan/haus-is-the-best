import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import styled from 'styled-components';

import App from './components/App';
import AudioPlayer from './components/AudioPlayer';
import createStore from './store';
import { DefaultPattern } from './constants';

const Wrapper = styled.div`
  background-color: #011627;
  height: 100vh;
  width: 100%
`;

const store = createStore(
  {
    playing: false,
    bars: 1,
    bpm: 122,
    username: 'demo',
    compositionName: 'house-1',
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
    <Wrapper>
      <App />
      <AudioPlayer />
    </Wrapper>
  </Provider>,
  document.getElementById('app'),
);
