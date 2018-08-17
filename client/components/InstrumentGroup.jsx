import React from 'react';
import PadContainer from '../containers/PadContainer';

class InstrumentGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.createPads = this.createPads.bind(this);
  }

  createPads() {
    const { pattern, numPads, beat, instrument, updatePattern, triggerSample, padResponse } = this.props;
    const pads = [];
    for (let i = 0; i < numPads; i++) {
      const stepNum = ((beat - 1) * 4) + (i + 1) - 1;
      pads.push(<PadContainer
        velocity={pattern[instrument][stepNum]}
        beat={beat}
        subBeat={i + 1}
        instrument={instrument}
        key={i}
        triggerSample={triggerSample}
        padResponse={padResponse}
        updatePattern={updatePattern}
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

export default InstrumentGroup;
