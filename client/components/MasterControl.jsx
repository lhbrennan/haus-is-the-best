import React from 'react';
import styled from 'styled-components';

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

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled.label`
  font-size: 22px;
  margin-right: 7px;  
`;

const Input = styled.input`
  width: 30px;
  text-align: center;
  border-radius: 5px;
  padding: 5px;
  font-size: 16px;
`;

const MasterControl = props => (
  <Panel>
    <AsphaultButton onClick={props.play}>
      {props.playing ? 'Stop' : 'Play'}
    </AsphaultButton>
    <Container>
      <Label>BPM</Label>
      <Input type="text" onChange={props.updateBpm} defaultValue="120"/>
    </Container>
    <Container>
      <Label>Swing</Label>
      <Input type="text" onChange={(event) => props.updateSwing(event, 'swing')} defaultValue={props.swing} />
    </Container>
    <Container>
      <Label>Volume</Label>
      <Input type="text" onChange={props.updateSwing} defaultValue={props.swing} />
    </Container>
    <AsphaultButton onClick={props.saveComposition}>Save</AsphaultButton>
    <AsphaultButton onClick={props.loadComposition}>Load</AsphaultButton>
    <AsphaultButton onClick={props.reset}>Reset</AsphaultButton>
    <AsphaultButton onClick={props.togglePadResponse}>Toggle</AsphaultButton>
  </Panel>
);

export default MasterControl;