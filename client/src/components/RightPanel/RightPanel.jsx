import React from 'react';
import styled from 'styled-components';

import InstrumentVolumeContainer from '../InstrumentVolume/InstrumentVolumeContainer';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  width: 100px;
`;

const RightPanel = ({ instruments }) => (
  <Wrapper>
    {instruments.map(instrument => (
      <InstrumentVolumeContainer instrument={instrument} key={instrument} />
    ))}
  </Wrapper>
);

export default RightPanel;
