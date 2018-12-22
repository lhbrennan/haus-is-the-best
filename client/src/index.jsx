import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import styled from 'styled-components';

import animator from './animator'; // * Leave this

import App from './components/App';
import AudioPlayer from './components/AudioPlayer';
import store from './store';

const Wrapper = styled.div`
  background-color: #FFFFFF;
  height: 100vh;
  width: 100%
`;

ReactDOM.render(
  <Provider store={store}>
    <Wrapper>
      <App />
      <AudioPlayer />
    </Wrapper>
  </Provider>,
  document.getElementById('app'),
);
