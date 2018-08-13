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

const GridContainer = ({
  instruments, bars, pattern, resolution, triggerSample, padResponse, updatePattern, volumes, changeVolume,
}) => (
  <Div>
    <LeftPanel instruments={instruments} />
    <Grid 
      numBeats={bars * 4} 
      pattern={pattern}
      resolution={resolution} 
      instruments={instruments}
      triggerSample={triggerSample}
      padResponse={padResponse}
      updatePattern={updatePattern} />
    <RightPanel
      volumes={volumes}
      instruments={instruments}
      changeVolume={changeVolume} />
  </Div>
);


export default GridContainer;
