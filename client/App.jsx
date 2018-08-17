import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import PerformerSection from './components/PerformerSection';
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

    this.triggerSample = this.triggerSample.bind(this);
    this.togglePadResponse = this.togglePadResponse.bind(this);
  }

  /*---------------------------------------------------------------------------
    EVENT HANDLERS
  ---------------------------------------------------------------------------*/
  triggerSample(instrument) {
    this.playNote(instrument, 0);
  }

  togglePadResponse() {
    this.setState(prevState => ({ padResponse: !prevState.padResponse }));
  }
  /*---------------------------------------------------------------------------
    RENDERING
  ---------------------------------------------------------------------------*/

  render() {
    const {
      resolution, bars, padResponse,
    } = this.state;

    return (
      <Wrapper>
        <MasterControlContainer
          updateSetting={this.updateSetting}
          togglePadResponse={this.togglePadResponse}
        />
        <PerformerSection
          resolution={resolution}
          bars={bars}
          instruments={this.props.instruments}
          padResponse={padResponse}
          triggerSample={this.triggerSample}
        />
      </Wrapper>
    );
  }
}

const mapStateToProps = state => (
  {
    bpm: state.bpm,
    instruments: state.instruments,
    swing: state.swing,
    overallVolume: state.overallVolume,
  }
);

// const mapDispatchToProps = (dispatch) => {
//   return {
//       fetchData: (url) => dispatch(itemsFetchData(url))
//   };
// };

export default connect(mapStateToProps, null)(App);
