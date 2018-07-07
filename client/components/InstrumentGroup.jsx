import React from 'react';
import Pad from './Pad.jsx';

class InstrumentGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.createPads = this.createPads.bind(this);
  }

  createPads() {
    const { numPads, beat, instrument, updatePattern } = this.props;
    const pads = [];
    for (let i = 0; i < numPads; i++) {
      pads.push(<Pad 
        beat={beat}
        subBeat={i + 1} 
        instrument={instrument} 
        key={i}
        playSample={this.playSample}
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