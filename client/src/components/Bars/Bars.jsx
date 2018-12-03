import React from 'react';
import styled from 'styled-components';

import BarSelector from './BarSelector';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
`;

const Label = styled.label`
  font-size: 14px;
  text-transform: uppercase;
  color: #000000;
  margin: 0 0 5px 0;
  font-weight: bold;
`;

const Bars = () => (
  <Wrapper>
    <Label>Bar</Label>
    <BarSelector />
  </Wrapper>
);

export default Bars;
