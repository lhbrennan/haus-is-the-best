import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  // padding: 30px;
`;

// optimization: this styled component is duplicate of same in MasterControl
const PlayButton = styled.button`
  // position: relative;
  // vertical-align: top;
  Width: 80px;
  height: 80px;
  // padding: 40px;
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

const InnerWrapper = styled.div`
  display: flex;
  flex-flow: column;
`;

const SettingsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 5px;
`;

const Slider = styled.input`
  width: 110px;
  height: 20px;
  margin: 0;
  transform-origin: 75px 75px;
  // transform: rotate(-90deg);
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

const Transport = ({
  togglePlaying,
  playing,
  bpm,
  updateBpm,
  swing,
  updateSwing,
  overallVolume,
  updateOverallVolume,
}) => (
  <Wrapper>

    <PlayButton onClick={togglePlaying}>
      {playing ? 'Stop' : 'Play'}
    </PlayButton>

    <InnerWrapper>
      <SettingsContainer>
        <Label>
          BPM
        </Label>
        <Input type="text" onBlur={e => updateBpm(e.target.value)} defaultValue={bpm} />
      </SettingsContainer>

      <SettingsContainer>
        <Label>
          Swing
        </Label>
        <Slider
          type="range"
          min="0"
          max="5"
          step=".25"
          onChange={e => updateSwing(e.target.value)}
          value={swing}
        />
      </SettingsContainer>

      <SettingsContainer>
        <Label>
          Volume
        </Label>
        <Slider
          type="range"
          min="0"
          max="1"
          step=".05"
          onChange={e => updateOverallVolume(e.target.value)}
          overallVolume={overallVolume}
        />
      </SettingsContainer>
    </InnerWrapper>

  </Wrapper>
);

export default Transport;
