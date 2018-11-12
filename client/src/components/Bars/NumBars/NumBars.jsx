import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 12px 0px 0px;
`;

const Input = styled.input`
  width: 30px;
  text-align: center;
  border-radius: 3px;
  padding: 3px 5px;
  font-size: 16px;
`;

const Label = styled.label`
  font-size: 22px;
  margin-right: 16px;
`;

const NumBars = ({ updateBars, bars }) => (
  <Wrapper>
    <Label>BARS</Label>
    <Input type="text" onChange={e => updateBars(e.target.value)} value={bars} />
  </Wrapper>
);

export default NumBars;
