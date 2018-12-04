import React from 'react';
import styled from 'styled-components';

import Pad from '../Pad';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 270px;
  margin: 0 0 10px 0;
`;

class QtrNoteInstrumentBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.createPads = this.createPads.bind(this);
  }

  createPads() {
    const {
      pattern, numPads, beat, instrument, triggerSample, padSound,
    } = this.props;

    const pads = [];

    for (let i = 0; i < numPads; i++) {
      const stepNum = ((beat - 1) * 4) + (i + 1) - 1;
      pads.push(<Pad
        velocity={pattern[instrument][stepNum]}
        beat={beat}
        subBeat={i + 1}
        instrument={instrument}
        key={i}
        triggerSample={triggerSample}
        padSound={padSound}
      />);
    }
    return pads;
  }

  render() {
    return (
      <Wrapper>
        {this.createPads()}
      </Wrapper>
    );
  }
}

export default QtrNoteInstrumentBlock;
