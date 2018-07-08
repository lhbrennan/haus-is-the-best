import React from 'react';
import styled from 'styled-components';
import pizz from 'pizzicato'

import GridContainer from './components/GridContainer.jsx';
import MasterControl from './components/MasterControl.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      audioContext: null,
      timerId: null,
      timerInterval: 50, // milliseconds
      playing: false,
      bars: 1,
      resolution: 16, // steps per bar
      scheduleAheadTime: .1, // seconds
      nextStepTime: 0, // seconds
      activeStep: 0, // 16 total steps
      bpm: 60, // beats per minute
      swing: 3,
      instruments: ['kick', 'clap', 'snare', 'openHat', 'closedHat'],
      pattern: new Array(16).fill().map(elem => ({kick: false, clap: false, snare: false, openHat: false, closedHat: false})),
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
    this.timer = this.timer.bind(this);
    this.scheduler = this.scheduler.bind(this);
    this.nextStep = this.nextStep.bind(this);
  }

  play() {
    this.state.playing = !this.state.playing;
    console.log(`playing: ${this.state.playing}`)

    if (this.state.playing) { // start playing
        this.setState({
          audioContext: new AudioContext(),
          activeStep: 0,
          nextStepTime: 0,
        })
        this.timer();
    } else {
        clearInterval(this.state.timerId);
    }
  }

  timer() {
    const timerId = setInterval(this.scheduler, this.state.timerInterval);
    this.setState({timerId: timerId});
    console.log('timerId: ', this.state.timerId);
  }

  scheduler() {
    const { audioContext, scheduleAheadTime } = this.state;
    // while there are notes that will need to play before the next interval, 
    // schedule them and advance the pointer.
    console.log('running scheduler...');
    while (this.state.nextStepTime < audioContext.currentTime + scheduleAheadTime ) {
        console.log('nextStepTime', this.state.nextStepTime);
        this.sounds.kick.play(this.state.nextStepTime);
        this.nextStep();
    }
  }

  nextStep() {
    const secondsPerBeat = 60.0 / this.state.bpm;
    this.setState(prevState => (
      {nextStepTime: prevState.nextStepTime + (0.25 * secondsPerBeat)}
    ));

    this.setState(prevState => {
      let newActiveStep = prevState.activeStep + 1;
      if (newActiveStep === 16) {
        return {
          activeStep: 0
        };        
      }
      return {
        activeStep: newActiveStep
      };     
    });
  }

  triggerSample(instrument) {
    // this.sounds[instrument].play();
    console.log('now: ', this.state.audioContext.currentTime);
    this.sounds.kick.play(.25);
    // this.sounds.kick.play(.5);
    // this.sounds.kick.play(.75);
    // this.sounds.kick.play(1);
    // this.sounds.kick.play(1.25);
    // this.sounds.kick.play(1.5);
    // this.sounds.kick.play(1.75);
    this.sounds.kick.play(2);
  }

  updatePattern(instrument, beat, subBeat) {
    const stepNum = ((beat - 1) * 4) + subBeat - 1;
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