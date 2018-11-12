import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row;
  flex: 0 0 330px;
  padding: 0px 10px;
  justify-content: flex-start;
  align-items: flex-end;
  color: #82b1ff;
`;

const Labels = styled.div`
  display: flex;
  flex-flow: column;
  margin-right: 16px;
`;

const Label = styled.label`
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  margin-top: 10px;
  font-size: 22px;
`;

const Settings = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  align-items: flex-start;
`;

const Setting = styled.div`
`;

const Slider = styled.input`
  width: 110px;
  height: 20px;
  margin-top: 10px;
  transform-origin: 75px 75px;
`;

const Input = styled.input`
  width: 40px;
  text-align: center;
  border-radius: 3px;
  padding: 3px 5px;
  font-size: 16px;
`;

const PlayBackSettings = ({
  bpm,
  updateBpm,
  swing,
  updateSwing,
}) => (
  <Wrapper>
    <Labels>
      <Label>BPM</Label>
      <Label>SWING</Label>
    </Labels>
    <Settings>
      <Setting>
        <Input type="text" onBlur={e => updateBpm(e.target.value)} defaultValue={bpm} />
      </Setting>
      <Setting>
        <Slider
          type="range"
          min="0"
          max="5"
          step=".25"
          onChange={e => updateSwing(e.target.value)}
          value={swing}
        />
      </Setting>
    </Settings>
  </Wrapper>
);

export default PlayBackSettings;
