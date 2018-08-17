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
      volumes: {
        kick: 1,
        clap: 0.8,
        snare: 1,
        openHat: 0.5,
        closedHat: 0.5,
      },
    };

    this.triggerSample = this.triggerSample.bind(this);
    this.togglePadResponse = this.togglePadResponse.bind(this);
    this.changeVolume = this.changeVolume.bind(this);
  }

  /*---------------------------------------------------------------------------
    EVENT HANDLERS
  ---------------------------------------------------------------------------*/
  triggerSample(instrument) {
    this.playNote(instrument, 0);
  }

  changeVolume(e, instrument) {
    // use x-squared since linear does not sound good
    const volume = e.target.value * e.target.value;
    console.log(`changing ${instrument} volume to ${volume}`);
    this.setState((prevState) => {
      const newVolumes = Object.assign({}, prevState.volumes);
      newVolumes[instrument] = volume;
      return { volumes: newVolumes };
    });
  }

  togglePadResponse() {
    this.setState(prevState => ({ padResponse: !prevState.padResponse }));
  }
  /*---------------------------------------------------------------------------
    RENDERING
  ---------------------------------------------------------------------------*/

  render() {
    const {
      resolution, bars, volumes, padResponse,
    } = this.state;

    return (
      <Wrapper>
        <MasterControlContainer
          play={this.play}
          updateSetting={this.updateSetting}
          reset={this.reset}
          togglePadResponse={this.togglePadResponse}
        />
        <PerformerSection
          resolution={resolution}
          bars={bars}
          instruments={this.props.instruments}
          padResponse={padResponse}
          triggerSample={this.triggerSample}
          volumes={volumes}
          changeVolume={this.changeVolume}
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
