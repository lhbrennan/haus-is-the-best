import React from 'react';
import styled from 'styled-components';
import TransportContainer from '../containers/TransportContainer';
import NumBarsContainer from '../containers/NumBarsContainer';
import BarSelectorContainer from '../containers/BarSelectorContainer';

const Panel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 30px 175px;
`;

const AsphaultButton = styled.button`
  position: relative;
  vertical-align: top;
  Width: 80px;
  height: 45px;
  padding: 0;
  font-size: 22px;
  color: white;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
  background: #34495e;
  border: 0;
  border-bottom: 2px solid #263849;
  border-radius: 5px;
  cursor: pointer;
  -webkit-box-shadow: inset 0 -2px #263849;
  box-shadow: inset 0 -2px #263849;
`;

const MasterControl = ({
  saveComposition,
  loadComposition,
  resetPattern,
  togglePadResponse,
  pattern,
  swing,
  bpm,
  username,
  compositionName,
}) => (
  <Panel>
    <TransportContainer />
    <NumBarsContainer />

    <AsphaultButton onClick={() => saveComposition(pattern, swing, bpm, username, compositionName)}>
      Save
    </AsphaultButton>

    <AsphaultButton onClick={() => loadComposition(username, compositionName)}>
      Load
    </AsphaultButton>

    <AsphaultButton onClick={resetPattern}>
      Reset
    </AsphaultButton>

    <AsphaultButton onClick={togglePadResponse}>
      Toggle
    </AsphaultButton>

    <BarSelectorContainer />
  </Panel>
);

export default MasterControl;
