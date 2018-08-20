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
    const { pattern, resolution, instruments, triggerSample, padResponse, visibleBar } = this.props;
    const beats = [];
    for (let i = (visibleBar - 1) * 4; i < visibleBar * 4; i++) {
      beats.push(<Beat
        pattern={pattern}
        resolution={resolution}
        instruments={instruments}
        beat={i + 1}
        key={i}
        triggerSample={triggerSample}
        padResponse={padResponse}
      />);
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
