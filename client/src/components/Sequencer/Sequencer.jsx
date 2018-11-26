import React from 'react';
import styled from 'styled-components';

import InstrumentsList from '../TrackSettings';
import GridContainer from '../Grid/GridContainer';

const Section = styled.section`
  display: flex;
  justify-content: center;
  min-width: 1295px;
`;

const Sequencer = () => (
  <Section>
    <InstrumentsList />
    <GridContainer />
  </Section>
);

export default Sequencer;
