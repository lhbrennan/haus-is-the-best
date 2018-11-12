import React from 'react';
import styled from 'styled-components';

import Button from '../UI/Button';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row;
  flex: 0 0 330px;
  padding: 0px 10px;
  justify-content: center;
  align-items: flex-end;
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
      saveComposition,
      loadComposition,
      pattern,
      swing,
      bpm,
      volumes,
      bars,
    } = this.props;

    return (
      <Wrapper>
        <Button onClick={() => saveComposition(pattern, swing, bpm, username, compositionName, volumes, bars)}>
          Save
        </Button>
        <Button onClick={() => loadComposition(username, compositionName)}>
          Load
        </Button>
      </Wrapper>
    );
  }
}

export default Credentials;
