import React from 'react';
import styled from 'styled-components';

import PlayBackSettingsContainer from '../PlayBackSettings/PlayBackSettingsContainer';
import Bars from '../Bars/Bars';
import ButtonTemplate from '../UI/Button';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  margin: 0px 0px 25px 0px;
`;

const Button = styled(ButtonTemplate)`
`;

const Button2 = styled.button`
  background: ${({ padResponse }) => {
    if (padResponse) { return 'orange'; }
    return '#34495e';
  }};
  margin: 0px 0px 5px 0px;
  Width: 80px;
  height: 60px;
  font-size: 22px;
  color: white;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
  border: 0;
  border-bottom: 2px solid #263849;
  border-radius: 5px;
  cursor: pointer;
  -webkit-box-shadow: inset 0 -2px #263849;
  box-shadow: inset 0 -2px #263849;
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
