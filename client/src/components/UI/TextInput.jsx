import React from 'react';

import styled from 'styled-components';

const Input = styled.input`
  width: 40px;
  text-align: center;
  border-radius: 3px;
  font-size: 13px;
  border: 1px solid #EAEAEA;
  padding: 0;
`;

const TextInput = ({ defaultValue, handleBlur }) => (
  <Input onBlur={handleBlur} defaultValue={defaultValue} />
);

export default TextInput;
