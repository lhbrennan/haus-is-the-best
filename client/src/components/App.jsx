import React from 'react';
import styled from 'styled-components';

import HeaderContainer from './Header';
import MasterControl from './MasterControl';
import Sequencer from './Sequencer/Sequencer';

const Wrapper = styled.div`
  font-family: 'Ubuntu', sans-serif;
  display: flex;
  flex-flow: column;
  max-width: 1440px;
  margin: 0 auto;
`;

const Main = styled.main`
display: flex;
flex-flow: column;
justify-content: center;
align-items: stretch;
`;

const App = () => (
  <Wrapper>
    <HeaderContainer />
    <Main>
      <MasterControl />
      <Sequencer />
    </Main>
  </Wrapper>
);

export default App;
