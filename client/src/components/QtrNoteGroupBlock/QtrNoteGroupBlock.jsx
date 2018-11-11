import React from 'react';
import styled from 'styled-components';

import QtrNoteInstrumentBlockContainer from '../QtrNoteInstrumentBlock/QtrNoteInstrumentBlockContainer';

const Div = styled.div`
  padding: 5px;
  border-radius: 8px;
  background: ${({ beat }) => (beat % 2 === 0 ? 'gainsboro' : 'azure')};
`;

class QtrNoteGroupBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      instruments, resolution, beat, triggerSample, padResponse,
    } = this.props;

    return (
      <Div beat={beat}>
        {instruments.map(instrument => (
          <QtrNoteInstrumentBlockContainer
            numPads={resolution / 4}
            instrument={instrument}
            beat={beat}
            key={instrument}
            triggerSample={triggerSample}
            padResponse={padResponse}
          />))
        }
      </Div>
    );
  }
}

export default QtrNoteGroupBlock;
