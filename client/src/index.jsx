import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import styled from 'styled-components';

import App from './components/App';
import AudioPlayer from './components/AudioPlayer';
import configureStore from './store';
import { DefaultPattern } from './constants';

const Wrapper = styled.div`
  background-color: #FFFFFF;
  height: 100vh;
  width: 100%
`;

const store = configureStore({}); // * takes persisted state object as argument

ReactDOM.render(
  <Provider store={store}>
    <Wrapper>
      <App />
      <AudioPlayer />
    </Wrapper>
  </Provider>,
  document.getElementById('app'),
);
