import React from 'react';
import styled from 'styled-components';

import NumBarsContainer from './NumBars/NumBarsContainer';
import BarSelectorContainer from './BarSelector/BarSelectorContainer';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row;
  flex: 0 0 330px;
  padding: 0px 10px;
  justify-content: flex-start;
  align-items: flex-end;
  color: #FFFFFF;
`;

const Bars = () => (
  <Wrapper>
    <NumBarsContainer />
    <BarSelectorContainer />
  </Wrapper>
);

export default Bars;
