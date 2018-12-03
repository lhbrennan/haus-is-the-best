import React from 'react';
import styled from 'styled-components';

import CompositionTitle from './CompositionTitle';
import Username from './Username';
import SaveLoad from './SaveLoad';

const Wrapper = styled.div`
  display: flex;
  height: 70px;
  border-right: 1px solid #EAEAEA;
  font-size: 16px;
`;

const Credentials = () => (
  <Wrapper>
    <div>
      <CompositionTitle />
      <div>
        by <Username />
      </div>
    </div>
    <SaveLoad />
  </Wrapper>
);

export default Credentials;
