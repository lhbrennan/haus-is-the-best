import React from 'react';
import styled from 'styled-components';

import RightPanelContainer from '../RightPanel/RightPanelContainer';
import GridContainer from '../Grid/GridContainer';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
`;

const PerformerSection = () => (
  <Wrapper>
    <GridContainer />
    <RightPanelContainer />
  </Wrapper>
);

export default PerformerSection;
