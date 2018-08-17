import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { connect } from 'react-redux';

import PerformerSection from './components/PerformerSection';
import MasterControlContainer from './containers/MasterControlContainer';

import { updateBpm, updateSwing } from './actions';

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`;

// kind of hacky defining this outside the App component...
const defaultPattern = {
  kick: new Array(16).fill(0),
  clap: new Array(16).fill(0),
  snare: new Array(16).fill(0),
  openHat: new Array(16).fill(0),
  closedHat: new Array(16).fill(0),
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bars: 1,
      resolution: 16, // steps per bar
      pattern: defaultPattern,
      padResponse: false,
      volumes: {
        kick: 1,
        clap: 0.8,
        snare: 1,
        openHat: 0.5,
        closedHat: 0.5,
      },
    };

    this.username = 'lhb'; // default username, will change with oauth
    this.compositionName = 'test1'; // default composition name

    this.triggerSample = this.triggerSample.bind(this);
    this.saveComposition = this.saveComposition.bind(this);
    this.loadComposition = this.loadComposition.bind(this);
    this.reset = this.reset.bind(this);
    this.togglePadResponse = this.togglePadResponse.bind(this);
    this.changeVolume = this.changeVolume.bind(this);
  }

  /*---------------------------------------------------------------------------
    EVENT HANDLERS
  ---------------------------------------------------------------------------*/
  triggerSample(instrument) {
    this.playNote(instrument, 0);
  }

  // updatePattern(instrument, beat, subBeat) {
  //   const stepNum = ((beat - 1) * 4) + subBeat - 1;
  //   this.setState((prevState) => {
  //     const updated = Object.assign({}, prevState.pattern);
  //     if (updated[instrument][stepNum] === 0) {
  //       updated[instrument][stepNum] = 5;
  //     } else if (updated[instrument][stepNum] === 1) {
  //       updated[instrument][stepNum] = 0;
  //     } else {
  //       updated[instrument][stepNum] = prevState.pattern[instrument][stepNum] - 2;
  //     }
  //     console.log('Velocity', updated[instrument][stepNum]);
  //     return { pattern: updated };
  //   });
  // }

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

  saveComposition() {
    console.log('saveComposition...');
    const { pattern } = this.state;
    const { swing } = this.props;
    axios.post('/compositions', {
      username: this.username,
      compositionName: this.compositionName,
      pattern,
      swing,
      bpm: this.props.bpm,
    });
  }

  loadComposition() {
    console.log('loadComposition...');
    axios.get('/compositions', {
      params: {
        username: this.username,
        compositionName: this.compositionName,
      },
    })
      .then((results) => {
        const composition = results.data;
        this.setState({
          pattern: composition.pattern,
        });
        this.props.dispatch(updateSwing(composition.swing));
        this.props.dispatch(updateBpm(composition.bpm));
        this.username = composition.username;
        this.compositionName = composition.compositionName;
      })
      .catch((err) => {
        console.error('COMPOSITION LOADING ERROR: ', err);
      });
  }

  reset() {
    this.stop();
    this.setState({
      pattern: defaultPattern,
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
      resolution, bars, volumes, padResponse, pattern,
    } = this.state;

    return (
      <Wrapper>
        <MasterControlContainer
          play={this.play}
          updateSetting={this.updateSetting}
          saveComposition={this.saveComposition}
          loadComposition={this.loadComposition}
          reset={this.reset}
          togglePadResponse={this.togglePadResponse}
        />
        <PerformerSection
          pattern={pattern}
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
