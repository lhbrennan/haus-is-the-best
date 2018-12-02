import React from 'react';
import styled from 'styled-components';

import InstrumentVolume from '../InstrumentVolume';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  flex: 0 0 120px;
  justify-content: space-around;
  padding: 0px 10px;
  border-radius: 3px;
`;

const TrackSettings = ({ instruments }) => (
  <Wrapper>
    {instruments.map(instrument => (
      <InstrumentVolume instrument={instrument} key={instrument} />
    ))}
  </Wrapper>
);

export default TrackSettings;
