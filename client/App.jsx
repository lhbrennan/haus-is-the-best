import React from 'react';
import styled from 'styled-components';
import pizz from 'pizzicato'

import GridContainer from './components/GridContainer.jsx';
import MasterControl from './components/MasterControl.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      audioContext: new AudioContext(),
      timerId: null,
      timerInterval: 100, // milliseconds
      playing: false,
      bars: 1,
      resolution: 16, // steps per bar
      scheduleAheadTime: .1, // seconds
      nextStepTime: 0, // seconds
      activeStep: 0, // 16 total steps
      bpm: 125, // beats per minute
      swing: 3,
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
    this.sounds = {
      kick: new pizz.Sound('/samples/SampleMagic_tr909_kick_04.wav'),
      clap: new pizz.Sound('/samples/SampleMagic_tr909_clap.wav'),
      snare: new pizz.Sound('/samples/SampleMagic_tr909_snare_04.wav'),
      closedHat: new pizz.Sound('/samples/SampleMagic_tr909_closedhat_01.wav'),
      openHat: new pizz.Sound('/samples/SampleMagic_tr909_openhat_02.wav'),
    }

    this.updatePattern = this.updatePattern.bind(this);
    this.triggerSample = this.triggerSample.bind(this);
    this.play = this.play.bind(this);
  }

  play() {
    this.state.playing = !this.state.playing;
    console.log(`playing: ${this.state.playing}`)

    if (playing) { // start playing
        this.setState({
          activeStep: 0,
          nextStepTime: audioContext.currentTime,
        })
        timer();
    } else {
        clearInterval(this.state.timeId);
    }
  }

  timer() {
    this.state.timerId = setInterval(scheduler, timerInterval);
  }

  scheduler() {
    const { nextStepTime, audioContext, scheduleAheadTime } = this.state;
    // while there are notes that will need to play before the next interval, 
    // schedule them and advance the pointer.
    while (nextStepTime < audioContext.currentTime + scheduleAheadTime ) {
        this.sounds.kick(nextStepTime);
        nextStep();
    }
  }

  nextStep() {
    var secondsPerBeat = 60.0 / bpm;
    nextStepTime += 0.25 * secondsPerBeat;

    activeStep++;
    if (activeStep === 16) {
      activeStep = 0;
    }
  }

  triggerSample(instrument) {
    this.sounds[instrument].play();
  }

  updatePattern(instrument, beat, subBeat) {
    const stepNum = ((beat - 1) * 4) + subBeat - 1;
    console.log('stepNum', stepNum);
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
        <MasterControl play={this.play} />
        <GridContainer 
          resolution={resolution} 
          bars={bars} 
          instruments={instruments}
          updatePattern={this.updatePattern}
          triggerSample={this.triggerSample} />
      </div>
    );
  }
}

export default App;