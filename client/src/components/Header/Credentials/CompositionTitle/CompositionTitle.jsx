import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  margin: 0 0 5px 0;
  align-items: flex-end;
  width: 200px;
`;

const IconButton = styled.div`
  border: none;
  margin: 0 0 5px 5px;
  cursor: pointer;
`;

const Input = styled.input`
  height: 35px;
  font-size: 30px;
  border: none;
  margin: 0;
  padding: 0;
  outline: none;
  width: 200px
`;

const H2 = styled.h2`
  font-size: 30px;
  margin: 0;
  padding: 0;
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

  componentDidUpdate() {
    const { isEditing } = this.state;
    if (isEditing) {
      document.getElementById('composition-title').focus();
    }
  }

  handleClick() {
    this.setState({ isEditing: true });
  }

  handleBlur(e) {
    this.setState({ isEditing: false });
    const newTitle = e.target.value;
    if (newTitle) {
      console.log('setting new composition title-->', e.target.value);
      this.props.handleBlur(e.target.value); // eslint-disable-line react/destructuring-assignment
    }
  }

  render() {
    const { isEditing } = this.state;
    const { compositionTitle } = this.props;

    if (isEditing) {
      return (
        <Wrapper>
          <Input
            id="composition-title"
            type="text"
            onBlur={this.handleBlur}
            defaultValue={compositionTitle}
          />
        </Wrapper>
      );
    }
    return (
      <Wrapper>
        <H2>{compositionTitle}</H2>
        <IconButton onClick={this.handleClick}><span className="far fa-edit" /></IconButton>
      </Wrapper>
    );
  }
}
export default CompositionTitle;
