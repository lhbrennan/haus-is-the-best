import React from 'react';
import styled from 'styled-components';

import RightPanelContainer from '../containers/RightPanelContainer';
import GridContainer from '../containers/GridContainer';
import LeftPanel from './LeftPanel';

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const PerformerSection = ({ instruments }) => (
  <Div>
    <LeftPanel instruments={instruments} />
    <GridContainer />
    <RightPanelContainer />
  </Div>
);

export default PerformerSection;
