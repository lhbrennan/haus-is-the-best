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
    // loadComposition('demo', 'house-1');
    console.log('Disabled autoloading of composition'); // Todo: update this when done refactoring reducers!
  }

  render() {
    const {
      username,
      compositionTitle,
      saveComposition,
      loadComposition,
    } = this.props;

    return (
      <Wrapper>
        <Button onClick={saveComposition}>
          Save
        </Button>
        <Button onClick={() => loadComposition(username, compositionTitle)}>
          Load
        </Button>
      </Wrapper>
    );
  }
}

export default SaveLoad;
