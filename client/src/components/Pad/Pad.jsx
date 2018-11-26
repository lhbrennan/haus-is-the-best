import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: ${({ velocity }) => {
    if (velocity === 5) { return '#6A0000'; }
    if (velocity === 3) { return '#B33A3A'; }
    if (velocity === 1) { return '#FFB6B6'; }
    return 'cadetblue';
  }};
  margin: 5px;
  border-radius: 3px;
  height: 60px;
  width: 60px;
`;

const Pad = (props) => {
  const {
    instrument,
    beat,
    subBeat,
    updatePattern,
    triggerSample,
    velocity,
    padResponse,
  } = props;

  const handler = () => {
    if (!velocity && padResponse) {
      triggerSample(instrument);
    }
    updatePattern(instrument, beat, subBeat);
  }

  return (
    <Button onClick={handler} velocity={velocity} />
  );
};

export default Pad;
