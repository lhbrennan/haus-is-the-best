import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 148px;
  height: 20px;
  transform-origin: 75px 75px;
  margin: 0;
`;

const Slider = ({ value, handleChange, min = 0, max = 1, step = 0.05 }) => (
  <Input
    type="range"
    min={min}
    max={max}
    step={step}
    onChange={handleChange}
    value={value}
  />
);

export default Slider;
