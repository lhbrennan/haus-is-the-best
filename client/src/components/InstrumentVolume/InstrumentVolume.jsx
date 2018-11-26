import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
`;

const Label = styled.div`
  text-align: left;
  font-size: 14px;
  padding: 3px;
  text-transform: capitalize;
  color: #FFFFFF;
`;

const SliderContainer = styled.div`
  padding: 3px;
`;

const Slider = styled.input`
  width: 120px;
  height: 20px;
  margin: 0;
  transform-origin: 75px 75px;
`;

const InstrumentVolume = ({ instrument, volumes, handleVolumeChange }) => (
  <Wrapper>
    <Label key={instrument}>
      {instrument.toUpperCase()}
    </Label>
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
  </Wrapper>
);

export default InstrumentVolume;
