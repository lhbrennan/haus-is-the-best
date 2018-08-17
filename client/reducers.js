import { combineReducers } from 'redux';

const defaultPattern = {
  kick: new Array(16).fill(0),
  clap: new Array(16).fill(0),
  snare: new Array(16).fill(0),
  openHat: new Array(16).fill(0),
  closedHat: new Array(16).fill(0),
};

function pattern(state = {}, action) {
  const { type, instrument, stepNum, payload } = action;
  const newPattern = Object.assign({}, state);

  switch (type) {
    case 'UPDATE_PATTERN':
      if (newPattern[instrument][stepNum] === 0) {
        newPattern[instrument][stepNum] = 5;
      } else if (newPattern[instrument][stepNum] === 1) {
        newPattern[instrument][stepNum] = 0;
      } else {
        newPattern[instrument][stepNum] -= 2;
      }
      return newPattern;
    case 'LOAD_COMPOSITION':
      return payload.pattern;
    case 'RESET_PATTERN':
      return defaultPattern;
    default:
      return state;
  }
}

function bpm(state = 120, action) {
  switch (action.type) {
    case 'UPDATE_BPM':
      return action.bpm;
    case 'LOAD_COMPOSITION':
      return action.payload.bpm;
    default:
      return state;
  }
}

function username(state = 'lhb2', action) {
  switch (action.type) {
    case 'LOAD_COMPOSITION':
      return action.payload.username;
    default:
      return state;
  }
}

function compositionName(state = 'composition1', action) {
  switch (action.type) {
    case 'LOAD_COMPOSITION':
      return action.payload.compositionName;
    default:
      return state;
  }
}

function instruments(state = [], action) {
  switch (action.type) {
    case 'UPDATE_INSTRUMENTS':
      return action.instruments;
    default:
      return state;
  }
}

function swing(state = 2.5, action) {
  switch (action.type) {
    case 'UPDATE_SWING':
      return action.swing;
    case 'LOAD_COMPOSITION':
      return action.payload.swing;
    default:
      return state;
  }
}

function playing(state = false, action) {
  switch (action.type) {
    case 'TOGGLE_PLAYING':
      return !state;
    default:
      return state;
  }
}

function overallVolume(state = 1, action) {
  switch (action.type) {
    case 'UPDATE_OVERALL_VOLUME':
      return action.overallVolume;
    default:
      return state;
  }
}


// TO-DO: fix this reducer
function volumes(state = {}, action) {
  switch (action.type) {
    case 'UPDATE_INSTRUMENT_VOLUME':
      return state;
    default:
      return state;
  }
}

export default combineReducers({
  bpm,
  username,
  compositionName,
  instruments,
  swing,
  playing,
  overallVolume,
  volumes,
  pattern,
});
