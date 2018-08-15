import React from 'react';
import { connect } from 'react-redux';

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);

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

    this.audioContext = new AudioContext();
    this.gainNode = null;
    this.timerInterval = 50; // milliseconds
    this.nextStepTime = 0; // seconds
    this.activeStep = 0; // 16 total steps
    this.timerId = null;
    this.scheduleAheadTime = 0.125; // seconds
    this.offset = 0.05; // seconds -- used to prevent screech on initial playback

    this.scheduler = this.scheduler.bind(this);
    this.scheduleActiveNotes = this.scheduleActiveNotes.bind(this);
  }

  componentDidMount() {
    console.log('props', this.props);
    const { instruments } = this.props;
    instruments.forEach((instrument) => {
      this.loadSound(instrument, this.pathsToSamples[instrument]);
    });
  }

  componentDidUpdate() {
    this.handlePlaying();
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

  handlePlaying() {
    const { playing } = this.props;
    if (playing) {
      this.initializeAudio();
      this.timer();
    } else {
      this.stop();
    }
  }

  initializeAudio() {
    const { overallVolume } = this.props;
    console.log('props', this.props);

    this.audioContext = new AudioContext();
    this.gainNode = this.audioContext.createGain();
    this.gainNode.connect(this.audioContext.destination);
    this.gainNode.gain.value = overallVolume;
    this.activeStep = 0;
    this.nextStepTime = this.offset;
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
    // console.log('running scheduler...');
    while (this.nextStepTime < currentTime + this.scheduleAheadTime) {
      // console.log(`Current time: ${currentTime}, activeStep: ${this.activeStep}`);
      this.scheduleActiveNotes();
      this.nextStep();
    }
  }

  scheduleActiveNotes() {
    const { pattern } = this.props;
    const instruments = Object.keys(pattern);
    instruments.forEach((instrument) => {
      const velocity = pattern[instrument][this.activeStep];
      if (velocity) {
        this.playNote(instrument, this.nextStepTime, velocity);
      }
    });
  }

  nextStep() {
    const { swing, bpm } = this.props;
    const secondsPerBeat = 60.0 / bpm;
    const secondsPer16thNote = secondsPerBeat / 4;

    const newActiveStep = this.activeStep + 1;
    this.activeStep = (newActiveStep === 16 ? 0 : newActiveStep);

    const swingFactor = (this.activeStep % 2 ? (1 + (swing / 10)) : (1 - (swing / 10)));
    this.nextStepTime += (secondsPer16thNote * swingFactor);
  }

  playNote(instrument, noteTime, velocity) {
    const { volumes } = this.props;
    const buffer = this.buffers[instrument];
    const voice = this.audioContext.createBufferSource();
    voice.buffer = buffer;

    const instrumentGainNode = this.audioContext.createGain();
    instrumentGainNode.connect(this.gainNode);
    const volume = volumes[instrument];
    instrumentGainNode.gain.value = volume * (velocity / 5);

    voice.connect(instrumentGainNode);
    voice.start(noteTime);
  }

  render() {
    return (
      <div />
    );
  }
}

const mapStateToProps = state => (
  {
    playing: state.playing,
    overallVolume: state.overallVolume,
    pattern: state.pattern,
    volumes: state.volumes,
    swing: state.swing,
    bpm: state.bpm,
    instruments: state.instruments,
  }
);

export default connect(
  mapStateToProps,
  null,
)(AudioPlayer);
