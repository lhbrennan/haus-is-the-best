import React from 'react';
import styled from 'styled-components';

import CompositionDetailsContainer from './CompositionDetails/CompositionDetailsContainer';
import LeftColumn from './LeftColumn/LeftColumn';
import MainColumn from './MainColumn/MainColumn';

const Wrapper = styled.div`
  font-family: 'Ubuntu', sans-serif;
  display: flex;
  flex-flow: column;
`;

const RowWrapper = styled.div`
display: flex;
flex-flow: row;
justify-content: center;
align-items: stretch;
`;

const App = () => (
  <Wrapper>
    <CompositionDetailsContainer />
    <RowWrapper>
      <LeftColumn />
      <MainColumn />
    </RowWrapper>
  </Wrapper>
);

export default App;
