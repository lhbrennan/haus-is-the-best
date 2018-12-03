import React from 'react';
import styled from 'styled-components';

import InstrumentVolume from '../InstrumentVolume';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  flex: 0 0 130px;
  justify-content: space-around;
  border-radius: 3px;
  margin: 0 20px 0 0;
`;

const TrackSettings = ({ instruments }) => (
  <Wrapper>
    {instruments.map(instrument => (
      <InstrumentVolume instrument={instrument} key={instrument} />
    ))}
  </Wrapper>
);

export default TrackSettings;
