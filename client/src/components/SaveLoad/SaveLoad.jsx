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

class SaveLoad extends React.Component {
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
          SAVE
        </Button>
        <Button onClick={() => loadComposition(username, compositionName)}>
          LOAD
        </Button>
      </Wrapper>
    );
  }
}

export default SaveLoad;
