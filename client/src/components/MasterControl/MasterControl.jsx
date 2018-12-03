import React from 'react';
import styled from 'styled-components';

import Bars from '../Bars/Bars';
import Button from '../UI/Button';
import PlayBox from '../PlayBox';
import DuplicatePattern from './DuplicatePattern';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  align-items: flex-end;
  margin: 0px 0px 25px 0px;
  height: 100px;
  padding: 0 50px;
`;

const Div = styled.div`
  display: flex;
  flex-flow: row;
  flex: 0 0 330px;
  justify-content: flex-end;
  align-items: flex-end;
  color: #FFFFFF;
  margin-left: auto;
`;

const MasterControl = ({
  resetPattern,
  togglePadResponse,
  padResponse,
}) => (
  <Wrapper>
    <PlayBox />
    <Bars />

    <Div>
      <DuplicatePattern />
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
