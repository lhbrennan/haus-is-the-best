import React from 'react';
import styled from 'styled-components';

import PerformerSectionContainer from '../PerformerSection/PerformerSectionContainer';
import MasterControlContainer from '../MasterControl/MasterControlContainer';

const Wrapper = styled.div`
  flex-flow: column nowrap;
`;

const MainColumn = () => (
  <Wrapper>
    <MasterControlContainer />
    <PerformerSectionContainer />
  </Wrapper>
);

export default MainColumn;
