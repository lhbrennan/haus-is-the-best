import React from 'react';
import styled from 'styled-components';

import GridContainer from '../Grid/GridContainer';
import MasterControlContainer from '../MasterControl/MasterControlContainer';

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
