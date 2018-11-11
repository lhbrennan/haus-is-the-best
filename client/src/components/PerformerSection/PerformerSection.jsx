import React from 'react';
import styled from 'styled-components';

import RightPanelContainer from '../RightPanel/RightPanelContainer';
import GridContainer from '../Grid/GridContainer';
import LeftPanel from '../LeftPanel/LeftPanel';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
`;

const PerformerSection = ({ instruments }) => (
  <Wrapper>
    <LeftPanel instruments={instruments} />
    <GridContainer />
    <RightPanelContainer />
  </Wrapper>
);

export default PerformerSection;
