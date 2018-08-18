import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import PerformerSectionContainer from './containers/PerformerSectionContainer';
import MasterControlContainer from './containers/MasterControlContainer';

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bars: 1,
      resolution: 16, // steps per bar
      padResponse: false,
    };

    this.togglePadResponse = this.togglePadResponse.bind(this);
  }

  /*---------------------------------------------------------------------------
    EVENT HANDLERS
  ---------------------------------------------------------------------------*/
  togglePadResponse() {
    this.setState(prevState => ({ padResponse: !prevState.padResponse }));
  }
  /*---------------------------------------------------------------------------
    RENDERING
  ---------------------------------------------------------------------------*/

  render() {
    return (
      <Wrapper>
        <MasterControlContainer />
        <PerformerSectionContainer />
      </Wrapper>
    );
  }
}

export default connect()(App);
