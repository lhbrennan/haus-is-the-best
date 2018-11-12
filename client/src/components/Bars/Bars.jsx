import React from 'react';
import styled from 'styled-components';

import NumBarsContainer from './NumBars/NumBarsContainer';
import BarSelectorContainer from './BarSelector/BarSelectorContainer';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  align-items: flex-start;
  color: #82b1ff;
`;

const Bars = () => (
  <Wrapper>
    <NumBarsContainer />
    <BarSelectorContainer />
  </Wrapper>
);

export default Bars;
