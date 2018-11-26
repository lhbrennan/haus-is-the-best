import React from 'react';
import styled from 'styled-components';

import PlayBackSettings from '../PlayBackSettings/index';
import Bars from '../Bars/Bars';
import SaveLoadContainer from '../SaveLoad/SaveLoadContainer';

import Button from '../UI/Button';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  margin: 0px 0px 25px 0px;
`;

const Div = styled.div`
  display: flex;
  flex-flow: row;
  flex: 0 0 330px;
  padding: 0px 10px;
  justify-content: center;
  align-items: flex-end;
  color: #FFFFFF;
`;

const MasterControl = ({
  resetPattern,
  togglePadResponse,
  padResponse,
}) => (
  <Wrapper>
    <PlayBackSettings />
    <Bars />

    <Div>
      <Button onClick={resetPattern}>
        RESET PATTERN
      </Button>

      {/* <Button padResponse={padResponse} onClick={togglePadResponse}>
        Pad Sound
      </Button> */}
    </Div>
    <SaveLoadContainer />
  </Wrapper>
);

export default MasterControl;
