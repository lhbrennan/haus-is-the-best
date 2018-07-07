import React from 'react';
import styled from 'styled-components';

import Grid from './Grid.jsx';
import LeftPanel from './LeftPanel.jsx';
import RightPanel from './RightPanel.jsx';

const Div = styled.div`
  display: flex;
  flex-direction: row;
`;


const GridContainer = props => (
  <Div>
    <LeftPanel />
    <Grid 
      numBeats={props.bars * 4} 
      resolution={props.resolution} 
      instruments={props.instruments}
      playSample={props.playSample} />
      updatePattern={props.updatePattern} />
    <RightPanel />
  </Div>
);

export default GridContainer;