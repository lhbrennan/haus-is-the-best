import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  height: 45px;
  width: 45px;
  border: 2px solid rgba(155,155,155,0.37);
  border-radius: 2px;
  font-size: 22px;
  margin: 0 10px 0 0;
  position: relative;

  cursor: pointer;
  outline: none;
`;

const AddBar = ({ handleClick }) => (
  <Button onClick={handleClick}>+</Button>
);

export default AddBar;
