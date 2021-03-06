import React from 'react';
import { connect } from 'react-redux';

import { dequeueEvent } from '../actions';
import {
  getBars,
  getBpm,
  getVolumes,
  getInstruments,
  getPattern,
} from '../reducers';

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

    this.audioContext = null;
    this.gainNode = null;
    this.timerInterval = 50; // milliseconds
    this.nextStepTime = 0; // seconds
    this.activeStep = 0; // 16 total steps
    this.timerId = null;
    this.scheduleAheadTime = 0.125; // seconds
    this.offset = 0.05; // seconds -- used to prevent screech on initial playback

    this.scheduler = this.scheduler.bind(this);
    this.scheduleActiveNotes = this.scheduleActiveNotes.bind(this);
    this.playNote = this.playNote.bind(this);
  }

  componentDidMount() {
    const { instruments } = this.props;
    instruments.forEach((instrument) => {
      this.loadSound(instrument, this.pathsToSamples[instrument]);
    });

    this.initializeAudio();
  }

  componentDidUpdate(prevProps) {
    const { playing, overallVolume, eventQueue, dequeueEvent } = this.props;
    if (eventQueue.length > 0) {
      this.playNote(eventQueue[0]);
      dequeueEvent();
    }
    if (prevProps.playing !== playing) {
      this.handlePlaying();
    }
    if (playing) {
      this.gainNode.gain.value = overallVolume;
    }
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
    while (this.nextStepTime < currentTime + this.scheduleAheadTime) {
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
    const { swing, bpm, bars } = this.props;
    const secondsPerBeat = 60.0 / bpm;
    const secondsPer16thNote = secondsPerBeat / 4;

    const newActiveStep = this.activeStep + 1;
    this.activeStep = (newActiveStep === (bars * 16) ? 0 : newActiveStep);

    const swingFactor = (this.activeStep % 2 ? (1 + (swing / 10)) : (1 - (swing / 10)));
    this.nextStepTime += (secondsPer16thNote * swingFactor);
  }

  playNote(instrument, noteTime = 0, velocity = 5) {
    const { volumes } = this.props;
    const buffer = this.buffers[instrument];
    const voice = this.audioContext.createBufferSource();
    voice.buffer = buffer;

    const instrumentGainNode = this.audioContext.createGain();
    instrumentGainNode.connect(this.gainNode);
    let volume = volumes[instrument];
    volume = (Math.exp(volume) - 1) / (Math.E - 1);
    instrumentGainNode.gain.value = volume * (velocity / 5);

    voice.connect(instrumentGainNode);
    voice.start(noteTime);
  }

  render() {
    return null;
  }
}

const mapStateToProps = state => (
  {
    playing: state.playing,
    overallVolume: state.overallVolume,
    pattern: getPattern(state),
    volumes: getVolumes(state),
    swing: state.swing,
    bpm: getBpm(state),
    instruments: getInstruments(state),
    eventQueue: state.eventQueue,
    bars: getBars(state),
  }
);

const mapDispatchToProps = dispatch => ({
  dequeueEvent: () => dispatch(dequeueEvent()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);
