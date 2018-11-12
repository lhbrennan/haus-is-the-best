import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  align-items: center;
  flex: 0 0 1440px;
`;

const SliderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 3px 0px;
`;

const Label = styled.label`
  font-size: 22px;
  margin-right: 7px;
  color: #82b1ff; 
`;

const Input = styled.input`
  width: 130px;
  text-align: center;
  border-radius: 5px;
  padding: 5px;
  font-size: 16px;
`;

class Credentials extends React.Component {
  componentDidMount() {
    const { loadComposition, username, compositionName } = this.props;
    loadComposition(username, compositionName);
  }

  render() {
    const {
      username,
      compositionName,
      updateUsername,
      updateCompositionName,
    } = this.props;

    return (
      <Wrapper>
        <SliderContainer>
          <Label>
            Username
          </Label>
          <Input type="text" onBlur={e => updateUsername(e.target.value)} defaultValue={username} />
        </SliderContainer>
        <SliderContainer>
          <Label>
            Composition
          </Label>
          <Input type="text" onBlur={e => updateCompositionName(e.target.value)} defaultValue={compositionName} />
        </SliderContainer>
      </Wrapper>
    );
  }
}

export default Credentials;
