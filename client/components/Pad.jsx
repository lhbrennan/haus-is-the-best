import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: ${props => props.active ? 'red' : 'cadetblue'};
  margin: 5px; 
  border-radius: 10px;
  height: 50px;
  width: 50px;
`;

class Pad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handler = this.handler.bind(this);
  }

  handler() {
    const { instrument, beat, subBeat, updatePattern, triggerSample } = this.props;
    if(!this.props.active) {
      triggerSample(instrument);
    }
    console.log(`${instrument}: ${beat}.${subBeat}`);
    updatePattern(instrument, beat, subBeat);
    // this.setState((prevState) => {
    //   return {
    //     active: !prevState.active
    //   };
    // });
  }

  render() {
    return (
      <Button onClick={this.handler} active={this.props.active} ></Button>
    );
  }
}

export default Pad;