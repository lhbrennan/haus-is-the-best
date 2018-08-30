import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  padding: 3px;
`;

const AsphaultButton = styled.button`
  position: relative;
  vertical-align: top;
  Width: 80px;
  height: 45px;
  padding: 0;
  margin: 5px;
  font-size: 22px;
  color: white;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
  background: #34495e;
  border: 0;
  border-bottom: 2px solid #263849;
  border-radius: 5px;
  cursor: pointer;
  -webkit-box-shadow: inset 0 -2px #263849;
  box-shadow: inset 0 -2px #263849;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SliderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 3px 0px;
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

const Credentials = ({
  username,
  compositionName,
  updateUsername,
  updateCompositionName,
  saveComposition,
  loadComposition,
  pattern,
  swing,
  bpm,
  volumes,
}) => (
  <Wrapper>

    <ButtonContainer>
      <AsphaultButton onClick={() => saveComposition(pattern, swing, bpm, username, compositionName, volumes)}>
        Save
      </AsphaultButton>

      <AsphaultButton onClick={() => loadComposition(username, compositionName)}>
        Load
      </AsphaultButton>
    </ButtonContainer>

    <SliderContainer>
      <Label>
        Username
      </Label>
      <Input type="text" onBlur={e => updateUsername(e.target.value)} defaultValue={username} />
    </SliderContainer>

    <SliderContainer>
      <Label>
        Composition
      </Label>
      <Input type="text" onBlur={e => updateCompositionName(e.target.value)} defaultValue={compositionName} />
    </SliderContainer>

  </Wrapper>
)

export default Credentials;

