import React from 'react';
import Pad from './Pad.jsx';

const createPads = numPads => {
  const pads = [];
  for (let i = 0; i < numPads; i++) {
    pads.push(<Pad key={i} />);
  }
  return pads;
}

const InstrumentGroup = props => (
  <div>
    {createPads(props.numPads)}
  </div>
);

export default InstrumentGroup;