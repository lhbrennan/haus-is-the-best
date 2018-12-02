import React from 'react';
import styled from 'styled-components';

const Input = styled.input``;

const H2 = styled.h2`
  font-size: 30px;
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
      <div>
        <H2>{compositionTitle}</H2>
        <button type="button" onClick={this.handleClick}>Update</button>
      </div>
    );
  }
}
export default CompositionTitle;
