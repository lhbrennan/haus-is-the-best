import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  color: #82b1ff;
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
  bpm,
  updateBpm,
  swing,
  updateSwing,
}) => (
  <Wrapper>
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
    </InnerWrapper>
  </Wrapper>
);

export default Transport;
