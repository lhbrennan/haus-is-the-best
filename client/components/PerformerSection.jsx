import React from 'react';
import styled from 'styled-components';

import Grid from './Grid';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const PerformerSection = ({
  instruments, bars, pattern, resolution, triggerSample, padResponse, volumes, changeVolume,
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
    />
    <RightPanel
      volumes={volumes}
      instruments={instruments}
      changeVolume={changeVolume}
    />
  </Div>
);

export default PerformerSection;
