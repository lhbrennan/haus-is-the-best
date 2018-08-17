import React from 'react';
import styled from 'styled-components';

import RightPanelContainer from '../containers/RightPanelContainer';
import Grid from './Grid';
import LeftPanel from './LeftPanel';

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const PerformerSection = ({
  instruments, bars, resolution, triggerSample, padResponse,
}) => (
  <Div>
    <LeftPanel instruments={instruments} />
    <Grid
      numBeats={bars * 4}
      resolution={resolution}
      instruments={instruments}
      triggerSample={triggerSample}
      padResponse={padResponse}
    />
    <RightPanelContainer />
  </Div>
);

export default PerformerSection;
