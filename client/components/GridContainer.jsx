import React from 'react';
import styled from 'styled-components';

import Grid from './Grid.jsx';
import LeftPanel from './LeftPanel.jsx';
import RightPanel from './RightPanel.jsx';

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const GridContainer = props => (
  <Div>
    <LeftPanel instruments={props.instruments} />
    <Grid 
      numBeats={props.bars * 4} 
      resolution={props.resolution} 
      instruments={props.instruments}
      triggerSample={props.triggerSample}
      updatePattern={props.updatePattern} />
  </Div>
);

export default GridContainer;