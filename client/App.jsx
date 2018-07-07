import React from 'react';
import styled from 'styled-components';
import pizz from 'pizzicato'

import GridContainer from './components/GridContainer.jsx';
import MasterControl from './components/MasterControl.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      bars: 1,
      resolution: 16,
      bpm: 125,
      swing: 3,
      activeStep: 0,
      instruments: [
        'kick',
        'clap',
        'snare',
        'openHat',
        'closedHat',
      ],
      pattern: [
        {kick: false, clap: false, snare: false, openHat: false, closedHat: false},
        {kick: false, clap: false, snare: false, openHat: false, closedHat: false},
        {kick: false, clap: false, snare: false, openHat: false, closedHat: false},
        {kick: false, clap: false, snare: false, openHat: false, closedHat: false},
        {kick: false, clap: false, snare: false, openHat: false, closedHat: false},
        {kick: false, clap: false, snare: false, openHat: false, closedHat: false},
        {kick: false, clap: false, snare: false, openHat: false, closedHat: false},
        {kick: false, clap: false, snare: false, openHat: false, closedHat: false},
        {kick: false, clap: false, snare: false, openHat: false, closedHat: false},
        {kick: false, clap: false, snare: false, openHat: false, closedHat: false},
        {kick: false, clap: false, snare: false, openHat: false, closedHat: false},
        {kick: false, clap: false, snare: false, openHat: false, closedHat: false},
        {kick: false, clap: false, snare: false, openHat: false, closedHat: false},
        {kick: false, clap: false, snare: false, openHat: false, closedHat: false},
        {kick: false, clap: false, snare: false, openHat: false, closedHat: false},
        {kick: false, clap: false, snare: false, openHat: false, closedHat: false},
      ],
    };

    const kick = new pizz.Sound('../samples/SampleMagic_tr909_kick_04.wav');

    this.updatePattern = this.updatePattern.bind(this);
    this.playSample = this.playSample.bind(this);
  }

  playSample() {
    kick.play();
  }

  updatePattern(instrument, beat, subBeat) {
    const stepNum = (beat * 4) + subBeat - 1;
    this.setState((prevState) => {
      const newPattern = [...prevState.pattern];
      newPattern[stepNum][instrument] = !prevState.pattern[stepNum][instrument];
      return {
        pattern: newPattern
      };
    });
  }

  render() {
    const { resolution, bars, instruments} = this.state;
    return (
      <div>
        <MasterControl />
        <GridContainer 
          resolution={resolution} 
          bars={bars} 
          instruments={instruments}
          updatePattern={this.updatePattern}
          playSample={this.playSample} />
      </div>
    );
  }
}

export default App;