import React from 'react';
import styled from 'styled-components';

import Credentials from './Credentials/Credentials';
import PlayBackSettings from '../PlayBackSettings';

const Header = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  align-items: center;
  padding: 15px 50px;
  border-bottom: solid 1px #EAEAEA;
`;

const CompositionDetails = () => (
  <Header>
    <Credentials />
    <PlayBackSettings />
  </Header>
);

export default CompositionDetails;
