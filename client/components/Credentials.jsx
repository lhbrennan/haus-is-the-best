import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 30px 175px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled.label`
  font-size: 22px;
  margin-right: 7px;  
`;

const Input = styled.input`
  width: 130px;
  text-align: center;
  border-radius: 5px;
  padding: 5px;
  font-size: 16px;
`;

const Credentials = ({ username, compositionName, updateUsername, updateCompositionName }) => (
  <Wrapper>
    <ButtonContainer>
      <Label>
        Username
      </Label>
      <Input type="text" onBlur={e => updateUsername(e.target.value)} defaultValue={username} />
    </ButtonContainer>

    <ButtonContainer>
      <Label>
        Composition Name
      </Label>
      <Input type="text" onBlur={e => updateCompositionName(e.target.value)} defaultValue={compositionName} />
    </ButtonContainer>
  </Wrapper>
)

export default Credentials;

