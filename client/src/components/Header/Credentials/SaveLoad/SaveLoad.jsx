import React from 'react';
import styled from 'styled-components';

import Button from '../../../UI/Button';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: flex-end;
  height: 35px;
  margin: 0 25px;
`;

class SaveLoad extends React.Component {
  componentDidMount() {
    const { loadComposition } = this.props;
    loadComposition('house-heaven', '909 Vibe');
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
