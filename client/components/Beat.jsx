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
    const { instruments, resolution, beat, updatePattern } = this.props;
    return (
      <Div beat={beat}>
        {instruments.map(instrument => {
          return <InstrumentGroup 
            numPads={resolution / 4}
            instrument={instrument}
            beat={beat}
            key={instrument}
            updatePattern={updatePattern} />})
        }
      </Div>
    );
  }
}

export default Beat;