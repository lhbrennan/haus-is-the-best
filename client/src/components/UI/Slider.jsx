import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 148px;
  height: 20px;
  margin-top: 10px;
  transform-origin: 75px 75px;
`;

const Slider = ({ value, handleChange }) => (
  <Input
    type="range"
    min="0"
    max="5"
    step=".25"
    onChange={handleChange}
    value={value}
  />
);

export default Slider;
