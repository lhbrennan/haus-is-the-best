import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 30px;
  text-align: center;
  border-radius: 5px;
  padding: 5px;
  font-size: 16px;
`;

const Label = styled.label`
  font-size: 22px;
  margin-right: 7px;  
`;

const NumBars = ({ updateBars, bars }) => (
  <ButtonContainer>
    <Label>
      Bars
    </Label>
    <Input type="text" onChange={e => updateBars(e.target.value)} defaultValue={bars} />
  </ButtonContainer>

);

export default NumBars;
