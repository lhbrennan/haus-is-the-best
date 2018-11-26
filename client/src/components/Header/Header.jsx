import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  height: 70px;
  background-color: #44596b;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex: 0 0 1440px;
  flex-flow: row;
  justify-content: space-between;
`;

const Details = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: flex-end;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 26px;
  font-style: italic;

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
  color: #FFFFFF;
`;

const Input = styled.input`
  width: 130px;
  text-align: center;
  border-radius: 5px;
  padding: 2px 5px;
  font-size: 16px;
`;

const CompositionDetails = ({
  username,
  compositionName,
  updateUsername,
  updateCompositionName,
}) => (
  <Header>
    <InnerWrapper>
      <Title>HOUSE IS A FEELING</Title>
      <Details>
        <DetailWrapper>
          <Label>
            COMPOSITION
          </Label>
          <Input type="text" onBlur={e => updateCompositionName(e.target.value)} defaultValue={compositionName} />
        </DetailWrapper>
        <DetailWrapper>
          <Label>
            USERNAME
          </Label>
          <Input type="text" onBlur={e => updateUsername(e.target.value)} defaultValue={username} />
        </DetailWrapper>
      </Details>
    </InnerWrapper>
  </Header>
);

export default CompositionDetails;
