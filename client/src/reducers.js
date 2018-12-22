import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { generateDefaultTracks } from './constants';

const bpm = handleActions({
  BPM_UPDATE: (state, { payload }) => payload,
  COMPOSITION_LOAD: (state, { payload }) => payload.bpm,
}, 120);

const username = handleActions({
  USERNAME_UPDATE: (state, { payload }) => payload,
  COMPOSITION_LOAD: (state, { payload }) => payload.username,
}, '');

const compositionTitle = handleActions({
  COMPOSITION_TITLE_UPDATE: (state, { payload }) => {
    return payload || 'Untitled';
  },
  COMPOSITION_LOAD: (state, { payload }) => payload.compositionTitle,
}, 'Untitled');

const swing = handleActions({
  SWING_UPDATE: (state, { payload }) => payload,
  COMPOSITION_LOAD: (state, { payload }) => payload.swing,
}, 2.5);

const playing = handleActions({
  PLAYING_TOGGLE: state => !state,
  PATTERN_RESET: () => false,

}, false);

const overallVolume = handleActions({
  OVERALL_VOLUME_UPDATE: (state, { payload }) => payload,
}, 1);

const resolution = handleActions({
  // placeholder for future feature
}, 16);

const eventQueue = handleActions({
  QUEUE_EVENT: (state, { payload }) => [...state, payload],
  DEQUEUE_EVENT: state => [...state].slice(1),
}, []);

const padSound = handleActions({
  PAD_SOUND_TOGGLE: state => !state,
}, true);

const visibleBar = handleActions({
  BAR_SELECT: (state, { payload }) => payload,
}, 1);

const activeSixteenthNote = handleActions({
  ACTIVE_SIXTEENTH_NOTE_INCREMENT: (state, { payload: bars }) => {
    const limit = bars * 16;
    if (state === limit) {
      return 1;
    }
    return state + 1;
  },
  PLAYING_TOGGLE: () => 1,
}, 1);

const tracks = handleActions({
  PATTERN_UPDATE: (state, { payload: { instrument, stepNum } }) => {
    const newState = Object.assign({}, state);
    const newPattern = [...newState.instruments[instrument].pattern];
    if (newPattern[stepNum] === 0) {
      newPattern[stepNum] = 5;
    } else if (newPattern[stepNum] === 1) {
      newPattern[stepNum] = 0;
    } else {
      newPattern[stepNum] -= 2;
    }
    newState.instruments[instrument].pattern = newPattern;
    return newState;
  },
  PATTERN_DUPLICATE: (state) => {
    if (state.bars < 5) {
      const newState = Object.assign({}, state);
      newState.bars *= 2;
      const instruments = Object.keys(state.instruments);
      instruments.forEach((instrument) => {
        const { pattern } = state.instruments[instrument];
        newState.instruments[instrument].pattern = [...pattern, ...pattern];
      });
      return newState;
    }
    return state;
  },
  BARS_INCREMENT: (state) => {
    if (state.bars < 8) {
      const newState = Object.assign({}, state);
      newState.bars++;
      const instruments = Object.keys(state.instruments);
      instruments.forEach((instrument) => {
        const { pattern } = state.instruments[instrument];
        newState.instruments[instrument].pattern = [...pattern, ...new Array(16).fill(0)];
      });
      return newState;
    }
    return state;
  },
  INSTRUMENT_VOLUME_UPDATE: (state, { payload: { instrument, volume } }) => {
    const newState = Object.assign({}, state);
    newState.instruments[instrument].volume = volume;
    return newState;
  },
  PATTERN_RESET: () => generateDefaultTracks(),
  COMPOSITION_LOAD: (state, { payload: { tracks: newTracks } }) => {
    return newTracks;
  },
}, generateDefaultTracks());

const rootReducer = combineReducers({
  // * Credentials
  username,
  compositionTitle,
  // * Playback Settings
  playing,
  bpm,
  swing,
  overallVolume,
  // * UI Settings
  padSound,
  visibleBar,
  resolution,
  // * Track/Pattern Settings
  tracks,
  // * Audio System
  eventQueue,
  // * Animation System
  activeSixteenthNote,
});

export default rootReducer;

// * STATE SELECTORS
export const getUsername = state => state.username;
export const getCompositionTitle = state => state.compositionTitle;
export const getBpm = state => state.bpm;
export const getBars = state => state.tracks.bars;
export const getPadSound = state => state.padSound;
export const getInstruments = state => Object.keys(state.tracks.instruments);
export const getPattern = (state) => {
  const instruments = Object.keys(state.tracks.instruments);
  const pattern = {};
  instruments.forEach((instrument) => {
    pattern[instrument] = state.tracks.instruments[instrument].pattern;
  });
  return pattern;
};
export const getVolumes = (state) => {
  const instruments = Object.keys(state.tracks.instruments);
  const volumes = {};
  instruments.forEach((instrument) => {
    volumes[instrument] = state.tracks.instruments[instrument].volume;
  });
  return volumes;
};

// * DERIVED STATE SELECTORS
export const getVelocity = (state, instrument, beat, subBeat) => {
  const stepNum = ((beat - 1) * 4) + (subBeat) - 1;
  return state.tracks.instruments[instrument].pattern[stepNum];
};
