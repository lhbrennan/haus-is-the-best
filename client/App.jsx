import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import GridContainer from './components/GridContainer.jsx';
import MasterControl from './components/MasterControl.jsx';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      bars: 1,
      resolution: 16, // steps per bar
      pattern: {
        kick: new Array(16).fill(0),
        clap: new Array(16).fill(0),
        snare: new Array(16).fill(0),
        openHat: new Array(16).fill(0),
        closedHat: new Array(16).fill(0),
      }
    };
    
    this.username = 'lhb';
    this.compositionName = 'test1';
    this.swing = 2.5;
    this.bpm = 120;
    this.instruments = ['kick', 'clap', 'snare', 'openHat', 'closedHat'];
    this.timerInterval = 50; // milliseconds
    this.nextStepTime = 0; // seconds
    this.activeStep = 0; // 16 total steps
    this.audioContext = new AudioContext();
    this.timerId = null;
    this.scheduleAheadTime = .125; // seconds

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

    this.loadSound = this.loadSound.bind(this);
    this.updatePattern = this.updatePattern.bind(this);
    this.triggerSample = this.triggerSample.bind(this);
    this.play = this.play.bind(this);
    this.timer = this.timer.bind(this);
    this.scheduler = this.scheduler.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.playNote = this.playNote.bind(this);
    this.updateSwing = this.updateSwing.bind(this);
    this.updateBpm = this.updateBpm.bind(this);
    this.saveComposition = this.saveComposition.bind(this);
    this.loadComposition = this.loadComposition.bind(this);
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
    console.log('running scheduler...');
    while (this.nextStepTime < currentTime + this.scheduleAheadTime ) {
        console.log(`Current time: ${currentTime}, activeStep: ${this.activeStep}`);
        for (let instrument in this.state.pattern) {
          if (this.state.pattern[instrument][this.activeStep]) {
            this.playNote(instrument, this.nextStepTime);
          }
        }
        this.nextStep();
    }
  }

  nextStep() {
    const secondsPerBeat = 60.0 / this.bpm;
    const secondsPer16thNote = secondsPerBeat / 4;

    const newActiveStep = this.activeStep + 1;
    this.activeStep = (newActiveStep === 16 ? 0 : newActiveStep);

    const swingFactor = (this.activeStep % 2 ? (1+(this.swing/10)) : (1-(this.swing/10)))
    this.nextStepTime += (secondsPer16thNote * swingFactor);
  }

  playNote(instrument, noteTime) {
    const buffer = this.buffers[instrument];
    const voice = this.audioContext.createBufferSource();
    voice.buffer = buffer;
    voice.connect(this.audioContext.destination);
    voice.start(noteTime);
  }

  triggerSample(instrument) {
    this.playNote(instrument, 0);
  }

  // EVENT HANDLERS -----------------------------------------------------------
  updatePattern(instrument, beat, subBeat) {
    const stepNum = ((beat - 1) * 4) + subBeat - 1;
    this.setState((prevState) => {
      const newPattern = Object.assign({}, prevState.pattern);
      newPattern[instrument][stepNum] = 1 - prevState.pattern[instrument][stepNum];
      return { pattern: newPattern };
    });
  }
  
  updateSwing(event) {
    console.log('updating Swing');
    this.swing = event.target.value;
  }

  updateBpm(event) {
    console.log('updating BPM');
    this.bpm = event.target.value;
  }

  saveComposition() {
    console.log('saveComposition...')
    axios.post('/compositions', {
      username: this.username,
      compositionName: this.compositionName,
      pattern: this.state.pattern,
      swing: this.swing,
      bpm: this.bpm,
    })
  }

  loadComposition() {
    console.log('loadComposition...')
    axios.get('/compositions', {
      params: {
        username: this.username,
        compositionName: this.compositionName,
      }
    })
      .then((results) => {
        const composition = results.data;
        console.log('loading composition: ');
        console.log(composition);
        this.setState(prevState => {
          return {
            pattern: composition.pattern
          };
        }, () => {
          console.log('loaded pattern')
          console.log(this.state.pattern);
        });
        this.swing = composition.swing;
        this.bpm = composition.bpm;
        this.username = composition.username;
        this.compositionName = composition.compositionName;
      })
      .catch((err) => {
        console.error(err);
      })
  }
  // --------------------------------------------------------------------------

  loadSound(instrument, samplePath) {
    let request = new XMLHttpRequest();
    request.open('GET', samplePath, true);
    request.responseType = 'arraybuffer';

    request.onload = () => {
      this.audioContext.decodeAudioData(request.response, (buffer) => {
        this.buffers[instrument] = buffer;
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
      <Wrapper>
        <MasterControl play={this.play}
          swing={this.swing}
          updateSwing={this.updateSwing}
          updateBpm={this.updateBpm}
          saveComposition={this.saveComposition}
          loadComposition={this.loadComposition} />
        <GridContainer
          pattern={this.state.pattern} 
          resolution={resolution} 
          bars={bars} 
          instruments={this.instruments}
          updatePattern={this.updatePattern}
          triggerSample={this.triggerSample} />
      </Wrapper>
    );
  }
}

export default App;