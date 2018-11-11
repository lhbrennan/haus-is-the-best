import React from 'react';
import styled from 'styled-components';

import LeftColumn from './LeftColumn/LeftColumn';
import MainColumn from './MainColumn/MainColumn';

const Wrapper = styled.div`
font-family: 'Ubuntu', sans-serif;
display: flex;
flex-flow: row;
justify-content: center;
align-items: stretch;
`;

const App = () => (
  <Wrapper>
    <LeftColumn />
    <MainColumn />
  </Wrapper>
);

export default App;
