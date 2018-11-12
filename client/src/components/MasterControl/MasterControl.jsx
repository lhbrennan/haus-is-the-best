import React from 'react';
import styled from 'styled-components';

import PlayBackSettingsContainer from '../PlayBackSettings/PlayBackSettingsContainer';
import Bars from '../Bars/Bars';
import Button from '../UI/Button';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  margin: 0px 0px 25px 0px;
`;

const Div = styled.div`
  display: flex;
  flex-flow: row;
  flex: 0 0 330px;
  padding: 0px 10px;
  justify-content: center;
  align-items: flex-end;
  color: #82b1ff;
`;

const MasterControl = ({
  resetPattern,
  togglePadResponse,
  padResponse,
}) => (
  <Wrapper>
    <PlayBackSettingsContainer />
    <Bars />

    <Div>
      <Button onClick={resetPattern}>
        Reset Pattern
      </Button>

      {/* <Button padResponse={padResponse} onClick={togglePadResponse}>
        Pad Sound
      </Button> */}
    </Div>
  </Wrapper>
);

export default MasterControl;
