import React from 'react';
import styled from 'styled-components';

import Credentials from './Credentials/Credentials';

const Header = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  align-items: center;
  padding: 15px 50px;
`;

const CompositionDetails = () => (
  <Header>
    <Credentials />
  </Header>
);

export default CompositionDetails;
