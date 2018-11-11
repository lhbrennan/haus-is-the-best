import React from 'react';
import styled from 'styled-components';

import InstrumentsList from '../InstrumentsList/InstrumentsListContainer';
import PlayBoxContainer from '../PlayBox/PlayBoxContainer';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
`;

const LeftColumn = () => (
  <Wrapper>
    <InstrumentsList />
    <PlayBoxContainer />
  </Wrapper>
);

export default LeftColumn;
