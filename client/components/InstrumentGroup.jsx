import React from 'react';
import Pad from './Pad.jsx';

class InstrumentGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.createPads = this.createPads.bind(this);
  }

  createPads() {
    const { pattern, numPads, beat, instrument, updatePattern, triggerSample } = this.props;
    const pads = [];
    for (let i = 0; i < numPads; i++) {
      pads.push(<Pad 
        active={!!pattern[instrument][((beat - 1) * 4) + (i + 1) - 1]}
        beat={beat}
        subBeat={i + 1} 
        instrument={instrument} 
        key={i}
        triggerSample={triggerSample}
        updatePattern={updatePattern} />);
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