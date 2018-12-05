import React from 'react';

import styled from 'styled-components';

const Input = styled.input`
  width: 40px;
  text-align: center;
  border-radius: 3px;
  font-size: 13px;
  border: 1px solid #EAEAEA;
  padding: 0;
`;

class NumInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value, // eslint-disable-line react/destructuring-assignment
    };
    this.handleBlur = this.handleBlur.bind(this);
    this.updateValue = this.updateValue.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value && this.props.value !== this.state.value) {
      this.setState({ // eslint-disable-line react/no-did-update-set-state
        value: this.props.value,
      });
    }
  }

  updateValue(e) {
    console.log('new local value is', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }

  handleBlur() {
    console.log('blurring with', this.state.value);
    this.props.handleBlur(this.state.value); // eslint-disable-line react/destructuring-assignment
  }

  render() {
    return (
      <Input
        type="number"
        onBlur={this.handleBlur}
        value={this.state.value}
        onChange={this.updateValue}
      />
    );
  }
}

export default NumInput;
