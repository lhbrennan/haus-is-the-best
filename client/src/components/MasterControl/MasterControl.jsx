import React from 'react';
import styled from 'styled-components';

import TransportContainer from '../Transport/TransportContainer';
import NumBarsContainer from '../NumBars/NumBarsContainer';
import BarSelectorContainer from '../BarSelector/BarSelectorContainer';
import CredentialsContainer from '../Credentials/CredentialsContainer';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  margin: 0px 0px 25px 0px;
`;

const BarsWrapper = styled.div`
  display: flex;
  flex-flow: column;
`;

const AsphaultButton = styled.button`
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
  flex-flow: column;
`;

const MasterControl = ({
  resetPattern,
  togglePadResponse,
  padResponse,
}) => (
  <Wrapper>
    <TransportContainer />
    <BarsWrapper>
      <NumBarsContainer />
      <BarSelectorContainer />
    </BarsWrapper>

    <Div>
      <AsphaultButton onClick={resetPattern}>
        Reset Pattern
      </AsphaultButton>

      <AsphaultButton padResponse={padResponse} onClick={togglePadResponse}>
        Pad Sound
      </AsphaultButton>
    </Div>

    <CredentialsContainer />
  </Wrapper>
);

export default MasterControl;
