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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  display: inline-block;
  width: 20px;
  height: 150px;
  padding: 0;
`;

const Slider = styled.input`
  width: 110px;
  height: 20px;
  margin: 0;
  transform-origin: 75px 75px;
  transform: rotate(-90deg);
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

const MasterControl = ({
  play,
  playing,
  updateSetting,
  updateBpm,
  bpm,
  swing,
  overallVolume,
  saveComposition,
  loadComposition,
  reset,
  togglePadResponse,
}) => (
  <Panel>
    <AsphaultButton onClick={play}>
      {playing ? 'Stop' : 'Play'}
    </AsphaultButton>

    <ButtonContainer>
      <Label>
        BPM
      </Label>
      <Input type="text" onBlur={e => updateBpm(e.target.value)} defaultValue={bpm} />
    </ButtonContainer>

    <ButtonContainer>
      <Label>
        Swing
      </Label>
      <SliderContainer>
        <Slider
          type="range"
          min="0"
          max="5"
          step=".25"
          onChange={e => updateSetting(e, 'swing')}
          defaultValue={swing}
        />
      </SliderContainer>
    </ButtonContainer>

    <ButtonContainer>
      <Label>
        Volume
      </Label>
      <SliderContainer>
        <Slider
          type="range"
          min="0"
          max="1"
          step=".05"
          onChange={e => updateSetting(e, 'overallVolume')}
          defaultValue={overallVolume}
        />
      </SliderContainer>
    </ButtonContainer>

    <AsphaultButton onClick={saveComposition}>
      Save
    </AsphaultButton>

    <AsphaultButton onClick={loadComposition}>
      Load
    </AsphaultButton>

    <AsphaultButton onClick={reset}>
      Reset
    </AsphaultButton>

    <AsphaultButton onClick={togglePadResponse}>
      Toggle
    </AsphaultButton>
  </Panel>
);

export default MasterControl;
