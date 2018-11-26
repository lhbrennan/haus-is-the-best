import React from 'react';
import styled from 'styled-components';

import NumBars from './NumBars';
import BarSelector from './BarSelector';
import DuplicatePattern from './DuplicatePattern';

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
    <NumBars />
    <BarSelector />
    <DuplicatePattern />
  </Wrapper>
);

export default Bars;
