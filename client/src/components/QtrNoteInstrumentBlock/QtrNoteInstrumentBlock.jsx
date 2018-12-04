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
    const { numPads, beat, instrument } = this.props;

    const pads = [];

    for (let i = 0; i < numPads; i++) {
      pads.push(<Pad
        beat={beat}
        subBeat={i + 1}
        instrument={instrument}
        key={i}
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
