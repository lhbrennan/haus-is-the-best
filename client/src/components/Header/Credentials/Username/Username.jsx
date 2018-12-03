import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 130px;
  text-align: center;
  border-radius: 5px;
  padding: 2px 5px;
  font-size: 16px;
  border: 1px solid #EAEAEA;
`;

const Username = ({ username, updateUsername }) => (
  <Input
    type="text"
    onBlur={e => updateUsername(e.target.value)}
    defaultValue={username}
  />
);

export default Username;
