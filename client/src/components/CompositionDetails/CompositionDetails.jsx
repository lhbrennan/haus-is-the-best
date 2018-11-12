import React from 'react';
import styled from 'styled-components';

const WrapperTop = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  height: 70px;
  background-color: #44596b;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  align-items: center;
  flex: 0 0 1440px;
`;

const DetailWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 3px 0px;
`;

const Label = styled.label`
  font-size: 22px;
  margin-right: 7px;
  color: #82b1ff; 
`;

const Input = styled.input`
  width: 130px;
  text-align: center;
  border-radius: 5px;
  padding: 5px;
  font-size: 16px;
`;

const CompositionDetails = ({
  username,
  compositionName,
  updateUsername,
  updateCompositionName,
}) => (
  <WrapperTop>
    <Wrapper>
      <DetailWrapper>
        <Label>
          Username
        </Label>
        <Input type="text" onBlur={e => updateUsername(e.target.value)} defaultValue={username} />
      </DetailWrapper>
      <DetailWrapper>
        <Label>
          Composition
        </Label>
        <Input type="text" onBlur={e => updateCompositionName(e.target.value)} defaultValue={compositionName} />
      </DetailWrapper>
    </Wrapper>
  </WrapperTop>
);

export default CompositionDetails;
