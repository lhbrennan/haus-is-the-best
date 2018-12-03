import React from 'react';
import styled from 'styled-components';

import QtrNoteGroupBlock from '../QtrNoteGroupBlock/QtrNoteGroupBlock';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  flex: 0 0 1160px;
`;

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.createQuarterNoteBlocks = this.createQuarterNoteBlocks.bind(this);
  }

  createQuarterNoteBlocks() {
    const {
      pattern, resolution, instruments, triggerSample, padResponse, visibleBar,
    } = this.props;
    const beats = [];

    for (let i = (visibleBar - 1) * 4; i < visibleBar * 4; i++) {
      beats.push(<QtrNoteGroupBlock
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
      <Wrapper>
        { this.createQuarterNoteBlocks() }
      </Wrapper>
    );
  }
}

export default Grid;
