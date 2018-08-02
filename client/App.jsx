import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import GridContainer from './components/GridContainer';
import MasterControl from './components/MasterControl';

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
      playing: false,
      bars: 1,
      resolution: 16, // steps per bar
      pattern: defaultPattern,
      padResponse: false,
      swing: 2.5,
      bpm: 120,
      overallVolume: 1,
      volumes: {
        kick: 1,
        clap: 0.8,
        snare: 1,
        openHat: 0.5,
        closedHat: 0.5,
      },
    };

    this.audioContext = new AudioContext();
    this.gainNode = null;
    this.username = 'lhb'; // default username, will change with oauth
    this.compositionName = 'test1'; // default composition name
    this.instruments = ['kick', 'clap', 'snare', 'openHat', 'closedHat'];
    this.timerInterval = 50; // milliseconds
    this.nextStepTime = 0; // seconds
    this.activeStep = 0; // 16 total steps
    this.timerId = null;
    this.scheduleAheadTime = 0.125; // seconds
    this.offset = 0.05; // seconds -- used to prevent screech on initial playback

    this.pathsToSamples = {
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
    this.updateSetting = this.updateSetting.bind(this);
    this.saveComposition = this.saveComposition.bind(this);
    this.loadComposition = this.loadComposition.bind(this);
    this.reset = this.reset.bind(this);
    this.stop = this.stop.bind(this);
    this.scheduleActiveNotes = this.scheduleActiveNotes.bind(this);
    this.togglePadResponse = this.togglePadResponse.bind(this);
    this.changeVolume = this.changeVolume.bind(this);
  }

  /*---------------------------------------------------------------------------
  AUDIO TIMING SYSTEM
  ---------------------------------------------------------------------------*/
  componentDidMount() {
    this.instruments.forEach((instrument) => {
      this.loadSound(instrument, this.pathsToSamples[instrument]);
    });
  }

  loadSound(instrument, samplePath) {
    const request = new XMLHttpRequest();
    request.open('GET', samplePath, true);
    request.responseType = 'arraybuffer';

    request.onload = () => {
      this.audioContext.decodeAudioData(request.response, (buffer) => {
        this.buffers[instrument] = buffer;
      }, (err) => {
        console.log('error loading sample: ', err);
        throw err;
      });
    };
    request.send();
  }

  play() {
    this.setState(prevState => ({ playing: !prevState.playing }), () => {
      const { playing, overallVolume } = this.state;
      if (playing) {
        this.audioContext = new AudioContext();
        this.gainNode = this.audioContext.createGain();
        this.gainNode.connect(this.audioContext.destination);
        this.gainNode.gain.value = overallVolume;
        this.activeStep = 0;
        this.nextStepTime = this.offset;
        this.timer();
      } else {
        this.stop();
      }
    });
  }

  stop() {
    clearInterval(this.timerId);
    this.timerId = null;
  }

  timer() {
    this.timerId = setInterval(this.scheduler, this.timerInterval);
  }

  scheduler() {
    const currentTime = this.audioContext.currentTime + this.offset;
    console.log('running scheduler...');
    while (this.nextStepTime < currentTime + this.scheduleAheadTime) {
      console.log(`Current time: ${currentTime}, activeStep: ${this.activeStep}`);
      this.scheduleActiveNotes();
      this.nextStep();
    }
  }

  scheduleActiveNotes() {
    const { pattern } = this.state;
    const instruments = Object.keys(pattern);
    instruments.forEach((instrument) => {
      if (pattern[instrument][this.activeStep]) {
        this.playNote(instrument, this.nextStepTime);
      }
    });
  }

  nextStep() {
    const { swing, bpm } = this.state;
    const secondsPerBeat = 60.0 / bpm;
    const secondsPer16thNote = secondsPerBeat / 4;

    const newActiveStep = this.activeStep + 1;
    this.activeStep = (newActiveStep === 16 ? 0 : newActiveStep);

    const swingFactor = (this.activeStep % 2 ? (1 + (swing / 10)) : (1 - (swing / 10)));
    this.nextStepTime += (secondsPer16thNote * swingFactor);
  }

  playNote(instrument, noteTime) {
    const { volumes } = this.state;
    const buffer = this.buffers[instrument];
    const voice = this.audioContext.createBufferSource();
    voice.buffer = buffer;

    const instrumentGainNode = this.audioContext.createGain();
    instrumentGainNode.connect(this.gainNode);
    const volume = volumes[instrument];
    instrumentGainNode.gain.value = volume;

    voice.connect(instrumentGainNode);
    voice.start(noteTime);
  }

  /*---------------------------------------------------------------------------
    EVENT HANDLERS
  ---------------------------------------------------------------------------*/
  triggerSample(instrument) {
    this.playNote(instrument, 0);
  }

  updatePattern(instrument, beat, subBeat) {
    const stepNum = ((beat - 1) * 4) + subBeat - 1;
    this.setState((prevState) => {
      const newPattern = Object.assign({}, prevState.pattern);
      newPattern[instrument][stepNum] = 1 - prevState.pattern[instrument][stepNum];
      return { pattern: newPattern };
    });
  }

  updateSetting(event, setting) {
    this.setState({ [setting]: event.target.value });
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

  saveComposition() {
    console.log('saveComposition...');
    const { swing, bpm, pattern } = this.state;
    axios.post('/compositions', {
      username: this.username,
      compositionName: this.compositionName,
      pattern,
      swing,
      bpm,
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
          swing: composition.swing,
          bpm: composition.bpm,
        });
        this.username = composition.username;
        this.compositionName = composition.compositionName;
      })
      .catch((err) => {
        console.error(err);
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
      resolution, bars, swing, bpm, overallVolume, volumes, padResponse, pattern, playing,
    } = this.state;
    return (
      <Wrapper>
        <MasterControl
          play={this.play}
          swing={swing}
          bpm={bpm}
          overallVolume={overallVolume}
          updateSetting={this.updateSetting}
          saveComposition={this.saveComposition}
          loadComposition={this.loadComposition}
          reset={this.reset}
          playing={playing}
          togglePadResponse={this.togglePadResponse}
        />
        <GridContainer
          pattern={pattern}
          resolution={resolution}
          bars={bars}
          instruments={this.instruments}
          updatePattern={this.updatePattern}
          padResponse={padResponse}
          triggerSample={this.triggerSample}
          volumes={volumes}
          changeVolume={this.changeVolume}
        />
      </Wrapper>
    );
  }
}

export default App;
