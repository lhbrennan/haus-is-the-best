import React from 'react';
import styled from 'styled-components';

import Beat from './Beat.jsx';

const Div = styled.div`
  display: flex;
  flex-direction: row;
`;

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.createBeats = this.createBeats.bind(this);
  }

  createBeats() {
    const { numBeats, resolution, instruments, updatePattern, triggerSample } = this.props;
    const beats = [];
    for (let i = 0; i < numBeats; i++) {
      beats.push(<Beat 
        resolution={resolution} 
        instruments={instruments}
        beat={i + 1}
        key={i}
        triggerSample={triggerSample}
        updatePattern={updatePattern} />);
    }
    return beats;
  }

  render() {
    return (
      <Div>
        { this.createBeats() }
      </Div>
    );
  }
}

export default Grid;