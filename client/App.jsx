import React from 'react';
import styled from 'styled-components';

import PerformerSectionContainer from './containers/PerformerSectionContainer';
import MasterControlContainer from './containers/MasterControlContainer';

const Wrapper = styled.div`
font-family: 'Ubuntu', sans-serif;
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
`;

const App = () => (
  <Wrapper>
    <MasterControlContainer />
    <PerformerSectionContainer />
  </Wrapper>
);

export default App;
