import React from 'react';
import styled from 'styled-components';

import CompositionTitle from './CompositionTitle';

const Header = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  align-items: center;
  height: 70px;
`;

const Details = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: flex-end;
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
  updateUsername,
}) => (
  <Header>
    <Details>
      <CompositionTitle />
      <DetailWrapper>
        <Label>
          USERNAME
        </Label>
        <Input type="text" onBlur={e => updateUsername(e.target.value)} defaultValue={username} />
      </DetailWrapper>
    </Details>
  </Header>
);

export default CompositionDetails;
