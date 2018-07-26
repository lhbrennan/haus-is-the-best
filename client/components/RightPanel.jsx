import React from 'react';
import styled from 'styled-components';

import InstrumentVolume from './InstumentVolume.jsx';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const RightPanel = ({ instruments, volumes, changeVolume }) => (
  <Wrapper>
    {instruments.map((instrument) => (
      <InstrumentVolume instrument={instrument} changeVolume={changeVolume} volume={volumes[instrument]} key={instrument} />
    ))}
  </Wrapper>
);

export default RightPanel;