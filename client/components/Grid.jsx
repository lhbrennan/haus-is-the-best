import React from 'react';
import Beat from './Beat.jsx';

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.createBeats = this.createBeats.bind(this);
  }

  createBeats() {
    const {numBeats, resolution, instruments} = this.props;
    const beats = [];
    for (let i = 0; i < numBeats; i++) {
      beats.push(<Beat resolution={resolution} instruments={instruments} key={i} />);
    }
    return beats;
  }

  render() {
    return (
      <div>
        { this.createBeats() }
      </div>
    );
  }
}

export default Grid;