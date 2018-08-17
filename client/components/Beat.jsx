import React from 'react';
import styled from 'styled-components';

import InstrumentGroup from './InstrumentGroup.jsx';

const Div = styled.div`
  padding: 5px;
  border-radius: 8px;
  background: ${props => props.beat % 2 === 0 ? 'gainsboro' : 'azure'};
`;

class Beat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { pattern, instruments, resolution, beat, triggerSample, padResponse } = this.props;
    return (
      <Div beat={beat}>
        {instruments.map(instrument => (
          <InstrumentGroup
            pattern={pattern}
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

export default Beat;