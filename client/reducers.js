import { combineReducers } from 'redux';

function bpm(state = 120, action) {
  switch (action.type) {
    case 'UPDATE_BPM':
      return action.bpm;
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

// TO-DO: fix this reducer
function pattern(state = {}, action) {
  switch (action.type) {
    case 'UPDATE_PATTERN':
      return state;
    default:
      return state;
  }
}

export default combineReducers({
  bpm,
  instruments,
  swing,
  playing,
  overallVolume,
  volumes,
  pattern,
});
