import React from 'react';

import styled from 'styled-components';

const Input = styled.input`
  width: 40px;
  text-align: center;
  border-radius: 3px;
  padding: 3px 5px;
  font-size: 16px;
`;

const TextInput = ({ defaultValue, handleBlur }) => (
  <Input onBlur={handleBlur} defaultValue={defaultValue} />
);

export default TextInput;
