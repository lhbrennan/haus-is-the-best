import React from 'react';
import styled from 'styled-components';

import InstrumentVolumeContainer from '../containers/InstrumentVolumeContainer';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
`;

const RightPanel = ({ instruments }) => (
  <Wrapper>
    {instruments.map(instrument => (
      <InstrumentVolumeContainer instrument={instrument} key={instrument} />
    ))}
  </Wrapper>
);

export default RightPanel;
