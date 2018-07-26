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

const InstrumentVolume = ({ instrument, volume, changeVolume }) => (
  <SliderContainer>
    <Slider 
      type="range" 
      min="0" 
      max="1" 
      step=".1" 
      onChange={(e) => changeVolume(e, instrument)}
      value={Math.sqrt(volume)} /> 
  </SliderContainer>
);

export default InstrumentVolume;