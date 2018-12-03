import React from 'react';
import styled from 'styled-components';

import Button from '../../../UI/Button';

const Wrapper = styled.div`
  display: flex;
  margin: 0 0 5px 0;
  align-items: flex-end;
`;

const Input = styled.input``;

const H2 = styled.h2`
  font-size: 30px;
  margin: 0px;
`;

class CompositionTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleClick() {
    this.setState({ isEditing: true });
  }

  handleBlur(e) {
    this.setState({ isEditing: false });
    console.log('new title', e.target.value);
    this.props.handleBlur(e.target.value); // eslint-disable-line react/destructuring-assignment
  }

  render() {
    const { isEditing } = this.state;
    const { compositionTitle } = this.props;

    if (isEditing) {
      return <input type="text" onBlur={this.handleBlur} />;
    }
    return (
      <Wrapper>
        <H2>{compositionTitle}</H2>
        <Button onClick={this.handleClick}>U</Button>
      </Wrapper>
    );
  }
}
export default CompositionTitle;
