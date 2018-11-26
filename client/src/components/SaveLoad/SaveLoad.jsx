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
    } = this.props;

    return (
      <Wrapper>
        <Button onClick={saveComposition}>
          Save
        </Button>
        <Button onClick={() => loadComposition(username, compositionName)}>
          Load
        </Button>
      </Wrapper>
    );
  }
}

export default SaveLoad;
