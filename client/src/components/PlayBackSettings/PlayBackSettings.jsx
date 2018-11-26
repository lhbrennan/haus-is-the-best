import React from 'react';
import styled from 'styled-components';

import PlayBox from '../PlayBox';
import PlaybackSetting from './PlaybackSetting/PlaybackSetting';
import TextInput from '../UI/TextInput';
import Slider from '../UI/Slider';

const Section = styled.section`
  display: flex;
  flex-flow: column;
  flex: 0 0 330px;
  padding: 0px 10px;
  justify-content: flex-start;
  align-items: flex-start;
  color: #82b1ff;
`;

const PlayBackSettings = ({
  bpm,
  swing,
  updateBpm,
  updateSwing,
}) => (
  <Section>
    <PlayBox />
    <PlaybackSetting label="BPM">
      <TextInput defaultValue={bpm} handleBlur={e => updateBpm(e.target.value)} />
    </PlaybackSetting>
    <PlaybackSetting label="Swing">
      <Slider value={swing} handleChange={e => updateSwing(e.target.value)} />
    </PlaybackSetting>
  </Section>
);

export default PlayBackSettings;
