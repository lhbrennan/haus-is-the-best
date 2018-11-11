import React from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
  padding: 12px;
`;

const Slider = styled.input`
  width: 75px;
  height: 20px;
  margin: 0;
  transform-origin: 75px 75px;
`;

const InstrumentVolume = ({ instrument, volumes, handleVolumeChange }) => (
  <SliderContainer>
    <Slider
      value={Math.sqrt(volumes[instrument])}
      onChange={e => handleVolumeChange(e.target.value, instrument)}
      type="range"
      min="0"
      max="1"
      step=".1"
    />
  </SliderContainer>
);

export default InstrumentVolume;
