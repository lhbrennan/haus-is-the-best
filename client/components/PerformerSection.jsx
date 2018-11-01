import React from 'react';
import styled from 'styled-components';

import RightPanelContainer from '../containers/RightPanelContainer';
import GridContainer from '../containers/GridContainer';
import LeftPanel from './LeftPanel';

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
