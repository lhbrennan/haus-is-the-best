import React from 'react';
import Grid from './Grid.jsx';
import LeftPanel from './LeftPanel.jsx';
import RightPanel from './RightPanel.jsx';


const GridContainer = props => (
  <div>
    <LeftPanel />
    <Grid 
      numBeats={props.bars * 4} 
      resolution={props.resolution} 
      instruments={props.instruments} />
    <RightPanel />
  </div>
);

export default GridContainer;