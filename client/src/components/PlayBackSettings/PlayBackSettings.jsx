import React from 'react';
import styled from 'styled-components';

import PlaybackSetting from './PlaybackSetting/PlaybackSetting';
import TextInput from '../UI/TextInput';
import Slider from '../UI/Slider';

const Section = styled.section`
  display: flex;
  flex-flow: row;
  flex: 1 0 400px;
  justify-content: flex-start;
  align-items: flex-start;
  color: #4A4A4A;
  height: 70px;
  margin: 0 0 0 40px;
`;

const VolumeWrapper = styled.div`
  margin-left: auto;
`;

const PlayBackSettings = ({
  bpm,
  swing,
  updateBpm,
  updateSwing,
  overallVolume,
  updateOverallVolume,
}) => (
  <Section>
    <PlaybackSetting label="BPM">
      <TextInput value={bpm} handleBlur={updateBpm} />
    </PlaybackSetting>
    <PlaybackSetting label="Swing">
      <Slider
        value={swing}
        handleChange={e => updateSwing(e.target.value)}
        min={0}
        max={5}
        step={0.25}
      />
    </PlaybackSetting>
    <VolumeWrapper>
      <PlaybackSetting label="Volume">
        <Slider
          value={overallVolume}
          handleChange={e => updateOverallVolume(e.target.value)}
          min={0}
          max={1}
          step={0.05}
        />
      </PlaybackSetting>
    </VolumeWrapper>
  </Section>
);

export default PlayBackSettings;
