import React from 'react';
import styled from 'styled-components';
// import pizz from 'pizzicato'

import GridContainer from './components/GridContainer.jsx';
import MasterControl from './components/MasterControl.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      bars: 1,
      resolution: 16, // steps per bar
      bpm: 120, // beats per minute
      swing: 3,
      pattern: new Array(16).fill().map(elem => ({kick: false, clap: false, snare: false, openHat: false, closedHat: false})),
    };
    
    this.instruments = ['kick', 'clap', 'snare', 'openHat', 'closedHat'];
    this.timerInterval = 50; // milliseconds
    this.nextStepTime = 0; // seconds
    this.activeStep = 0; // 16 total steps
    this.audioContext = new AudioContext();
    this.timerId = null;
    this.scheduleAheadTime = .125; // seconds
    this.loadSound = this.loadSound.bind(this);

    this.samplePaths = {
      kick: '/samples/SampleMagic_tr909_kick_04.wav',
      clap: '/samples/SampleMagic_tr909_clap.wav',
      snare: '/samples/SampleMagic_tr909_snare_04.wav',
      closedHat: '/samples/SampleMagic_tr909_closedhat_01.wav',
      openHat: '/samples/SampleMagic_tr909_openhat_02.wav',
    };

    this.buffers = {
      kick: null,
      clap: null,
      snare: null,
      closedHat: null,
      openHat: null,
    };

    // this.sounds = {
    //   kick: new pizz.Sound(this.samplePaths.kick),
    //   clap: new pizz.Sound(this.samplePaths.clap),
    //   snare: new pizz.Sound(this.samplePaths.clap),
    //   closedHat: new pizz.Sound(this.samplePaths.closedHat),
    //   openHat: new pizz.Sound(this.samplePaths.openHat),
    // };

    this.updatePattern = this.updatePattern.bind(this);
    this.triggerSample = this.triggerSample.bind(this);
    this.play = this.play.bind(this);
    this.timer = this.timer.bind(this);
    this.scheduler = this.scheduler.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.playOsc = this.playOsc.bind(this);
    this.playNote = this.playNote.bind(this);
  }

  play() {
    this.setState((prevState) => {
      return {
        playing: !prevState.playing
      };
    }, () => {
      if (this.state.playing) {
        this.activeStep = 0;
        this.nextStepTime = 0;
        this.timer();
      } else {
        clearInterval(this.timerId);
        this.timerId = null;
      }
    });
  }

  timer() {
    this.timerId = setInterval(this.scheduler, this.timerInterval);
  }

  scheduler() {
    const currentTime = this.audioContext.currentTime;
    // while there are notes that will need to play before the next interval, 
    // schedule them and advance the pointer.
    console.log('running scheduler...');
    while (this.nextStepTime < currentTime + this.scheduleAheadTime ) {
        console.log(`Current time: ${currentTime}, activeStep: ${this.activeStep}`);
        if([0, 4, 8, 12].includes(this.activeStep)) {
          // this.sounds.closedHat.clone().play(this.nextStepTime);
          // this.playOsc(this.nextStepTime, this.activeStep);
          this.playNote('closedHat', this.nextStepTime);
          console.log(`scheduled step ${this.activeStep} for ${this.nextStepTime}`)
        }
        this.nextStep();
    }
  }

  nextStep() {
    const secondsPerBeat = 60.0 / this.state.bpm;
    this.nextStepTime += (0.25 * secondsPerBeat);

    const newActiveStep = this.activeStep + 1;
    this.activeStep = (newActiveStep === 16 ? 0 : newActiveStep);
  }

  playOsc(time, activeStep) {
    const noteLength = .05;
    let osc = this.audioContext.createOscillator();
    osc.connect(this.audioContext.destination);

    if (! (activeStep % 16) ) {         // beat 0 == low pitch
      osc.frequency.value = 220.0;
    } else if (activeStep % 4) {          // quarter notes = medium pitch
      osc.frequency.value = 440.0;
    } else {                           // other 16th notes = high pitch
      osc.frequency.value = 880.0;
    }

    osc.start(time);
    osc.stop(time + noteLength);
  }

  playNote(instrument, noteTime) {
    const buffer = this.buffers[instrument];
    console.log(`instrument: ${instrument}`);
    console.log(buffer);

    const voice = this.audioContext.createBufferSource();
    voice.buffer = buffer;
    voice.connect(this.audioContext.destination);
    voice.start(noteTime);
  }


  triggerSample(instrument) {
    // this.sounds[instrument].clone().play();
    this.playNote(instrument, 0);

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

  loadSound(instrument, samplePath) {
    console.log(`loading ${instrument} sample`);
    let context = this.audioContext;
    let buffers = this.buffers;
    let request = new XMLHttpRequest();
    request.open('GET', samplePath, true);
    request.responseType = 'arraybuffer';

    // Decode asynchronously
    request.onload = function() {
      context.decodeAudioData(request.response, function(buffer) {
        buffers[instrument] = buffer;
      }, function(err) {
        console.log('error loading sample: ', err);
        throw err;
      });
    }
    request.send();
  }

  componentDidMount() {
    this.instruments.forEach(instrument => {
      this.loadSound(instrument, this.samplePaths[instrument]);
      
    })
  }

  render() {
    const { resolution, bars} = this.state;
    return (
      <div>
        <MasterControl play={this.play} />
        <GridContainer 
          resolution={resolution} 
          bars={bars} 
          instruments={this.instruments}
          updatePattern={this.updatePattern}
          triggerSample={this.triggerSample} />
      </div>
    );
  }
}

export default App;