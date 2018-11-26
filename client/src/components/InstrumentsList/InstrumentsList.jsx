import React from 'react';
import styled from 'styled-components';

import InstrumentVolumeContainer from '../InstrumentVolume/InstrumentVolumeContainer';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  flex: 0 0 120px;
  justify-content: space-around;
  padding-right: 3px;
`;

const InstrumentList = ({ instruments }) => (
  <Wrapper>
    {instruments.map(instrument => (
      <InstrumentVolumeContainer instrument={instrument} key={instrument} />
    ))}
  </Wrapper>
);

export default InstrumentList;
