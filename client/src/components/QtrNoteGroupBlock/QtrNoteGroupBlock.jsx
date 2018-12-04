import React from 'react';
import styled from 'styled-components';

import QtrNoteInstrumentBlock from '../QtrNoteInstrumentBlock';

const Div = styled.div`
  border-radius: 8px;
`;

class QtrNoteGroupBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      instruments, resolution, beat,
    } = this.props;

    return (
      <Div beat={beat}>
        {instruments.map(instrument => (
          <QtrNoteInstrumentBlock
            numPads={resolution / 4}
            instrument={instrument}
            beat={beat}
            key={instrument}
          />))
        }
      </Div>
    );
  }
}

export default QtrNoteGroupBlock;
