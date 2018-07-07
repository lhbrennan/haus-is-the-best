import React from 'react';
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
  }

  render() {
    const { resolution, bars, instruments} = this.state;
    return (
      <div>
        HOUSE IS THE BEST OF ALL TIMEEEEEEEEEEEEE
        <MasterControl />
        <GridContainer 
          resolution={resolution} 
          bars={bars} 
          instruments={instruments} />
      </div>
    );
  }
}

export default App;