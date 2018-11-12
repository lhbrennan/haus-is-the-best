import React from 'react';
import styled from 'styled-components';

import MasterControlContainer from '../MasterControl/MasterControlContainer';
import GridContainer from '../Grid/GridContainer';

const Wrapper = styled.div`
  flex-flow: column nowrap;
`;

const MainColumn = () => (
  <Wrapper>
    <MasterControlContainer />
    <GridContainer />
  </Wrapper>
);

export default MainColumn;
