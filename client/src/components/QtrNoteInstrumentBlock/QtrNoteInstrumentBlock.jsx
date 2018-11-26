import React from 'react';
import Pad from '../Pad';

class QtrNoteInstrumentBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.createPads = this.createPads.bind(this);
  }

  createPads() {
    const {
      pattern, numPads, beat, instrument, triggerSample, padResponse,
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
        padResponse={padResponse}
      />);
    }
    return pads;
  }

  render() {
    return (
      <div>
        {this.createPads()}
      </div>
    );
  }
}

export default QtrNoteInstrumentBlock;
