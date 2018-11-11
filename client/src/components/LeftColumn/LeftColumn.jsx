import React from 'react';
import styled from 'styled-components';

import LeftPanelContainer from '../InstrumentsList/InstrumentsListContainer';
import PlayBoxContainer from '../PlayBox/PlayBoxContainer';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
`;

const LeftColumn = () => (
  <Wrapper>
    <LeftPanelContainer />
    <PlayBoxContainer />
  </Wrapper>
);

export default LeftColumn;
