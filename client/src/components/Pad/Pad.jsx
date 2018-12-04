import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: ${({ velocity }) => {
    if (velocity === 5) { return '#00B2FF'; }
    if (velocity === 3) { return '#76d6ff'; }
    if (velocity === 1) { return '#d8f3ff'; }
    return '#FFFFFF';
  }};
  border-radius: 3px;
  height: 60px;
  width: 60px;
  padding: 0;
`;

const Pad = (props) => {
  const {
    instrument,
    beat,
    subBeat,
    updatePattern,
    triggerSample,
    velocity,
    padSound,
  } = props;

  const handler = () => {
    if (!velocity && padSound) {
      triggerSample(instrument);
    }
    updatePattern(instrument, beat, subBeat);
  }

  return (
    <Button onClick={handler} velocity={velocity} />
  );
};

export default Pad;
