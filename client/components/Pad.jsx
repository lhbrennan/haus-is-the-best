import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: ${(props) => {
    const v = props.velocity;
    if (v === 5) { return '#6A0000'; }
    if (v === 3) { return '#B33A3A'; }
    if (v === 1) { return '#FFB6B6'; }
    return 'cadetblue';
  }};
  margin: 5px; 
  border-radius: 10px;
  height: 50px;
  width: 50px;
`;

// TODO: Refactor to stateless component
class Pad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handler = this.handler.bind(this);
  }

  handler() {
    const {
      instrument, beat, subBeat, updatePattern, triggerSample, velocity, padResponse,
    } = this.props;
    if (!velocity && padResponse) {
      triggerSample(instrument);
    }
    console.log(`${instrument}: ${beat}.${subBeat}`);
    updatePattern(instrument, beat, subBeat);
  }

  render() {
    const { velocity } = this.props;
    return (
      <Button onClick={this.handler} velocity={velocity} />
    );
  }
}

export default Pad;
