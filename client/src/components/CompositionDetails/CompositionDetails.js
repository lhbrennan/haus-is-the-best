import React from 'react';
import styled from 'styled-components';

import CredentialsContainer from '../Credentials/CredentialsContainer';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  height: 70px;
  background-color: #44596b;
`;

const CompositionDetails = () => (
  <Wrapper>
    <CredentialsContainer />
  </Wrapper>
);

export default CompositionDetails;
