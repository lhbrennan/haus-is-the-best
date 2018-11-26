import { combineReducers } from 'redux';
import { defaultTracks, defaultInstruments, defaultVolumes, DefaultPattern } from './constants';
import * as types from './actionTypes';

// function tracks(state = defaultTracks, action) {

// }

function pattern(state = new DefaultPattern(), action) {
  const { type, instrument, stepNum, payload } = action;
  const newPattern = Object.assign({}, state);
  switch (type) {
    case types.UPDATE_PATTERN:
      if (newPattern[instrument][stepNum] === 0) {
        newPattern[instrument][stepNum] = 5;
      } else if (newPattern[instrument][stepNum] === 1) {
        newPattern[instrument][stepNum] = 0;
      } else {
        newPattern[instrument][stepNum] -= 2;
      }
      return newPattern;
    case types.DUPLICATE_PATTERN: {
      const duplicatedPattern = {};
      const activeInstruments = Object.keys(state);
      activeInstruments.forEach((activeInstrument) => {
        const instrumentPattern = state[activeInstrument];
        duplicatedPattern[activeInstrument] = [...instrumentPattern, ...instrumentPattern];
      });
      return duplicatedPattern;
    }
    case types.LOAD_COMPOSITION:
      return payload.pattern;
    case types.RESET_PATTERN:
      return new DefaultPattern();
    default:
      return state;
  }
}

function volumes(state = defaultVolumes, action) {
  const { volume, instrument, type } = action;
  switch (type) {
    case types.UPDATE_INSTRUMENT_VOLUME:
      return Object.assign({}, state, { [instrument]: volume });
    case types.LOAD_COMPOSITION:
      return action.payload.volumes || state;
    default:
      return state;
  }
}

function bars(state = 1, action) {
  switch (action.type) {
    case types.UPDATE_BARS:
      return action.bars;
    case types.LOAD_COMPOSITION:
      return action.payload.bars || 1;
    case types.RESET_PATTERN:
      return 1;
    case types.DUPLICATE_PATTERN:
      return state * 2;
    default:
      return state;
  }
}

function instruments(state = defaultInstruments, action) {
  switch (action.type) {
    case types.UPDATE_INSTRUMENTS:
      return action.instruments;
    default:
      return state;
  }
}

function bpm(state = 120, action) {
  switch (action.type) {
    case types.UPDATE_BPM:
      return action.bpm;
    case types.LOAD_COMPOSITION:
      return action.payload.bpm;
    default:
      return state;
  }
}

function username(state = '', action) {
  switch (action.type) {
    case types.UPDATE_USERNAME:
      return action.username;
    case types.LOAD_COMPOSITION:
      return action.payload.username;
    default:
      return state;
  }
}

function compositionName(state = '', action) {
  switch (action.type) {
    case types.UPDATE_COMPOSITION_NAME:
      return action.compositionName;
    case types.LOAD_COMPOSITION:
      return action.payload.compositionName;
    default:
      return state;
  }
}

function swing(state = 2.5, action) {
  switch (action.type) {
    case types.UPDATE_SWING:
      return action.swing;
    case types.LOAD_COMPOSITION:
      return action.payload.swing;
    default:
      return state;
  }
}

function playing(state = false, action) {
  switch (action.type) {
    case types.TOGGLE_PLAYING:
      return !state;
    default:
      return state;
  }
}

function overallVolume(state = 1, action) {
  switch (action.type) {
    case types.UPDATE_OVERALL_VOLUME:
      console.log('new overallVolume', action.volume);
      return action.volume;
    default:
      return state;
  }
}

function resolution(state = 16, action) {
  switch (action.type) {
    default:
      return state;
  }
}

function eventQueue(state = [], action) {
  switch (action.type) {
    case types.QUEUE_EVENT:
      return [...state, action.instrument];
    case types.DEQUEUE_EVENT:
      return [...state].slice(1);
    default:
      return state;
  }
}

function padResponse(state = true, action) {
  switch (action.type) {
    case types.TOGGLE_PAD_RESPONSE:
      return !state;
    default:
      return state;
  }
}

function visibleBar(state = 1, action) {
  switch (action.type) {
    case types.SELECT_BAR:
      return action.bar;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  // * Credentials
  username,
  compositionName,
  // * Playback Settings
  playing,
  bpm,
  swing,
  overallVolume,
  // * UI Settings
  padResponse,
  visibleBar,
  resolution,
  // * Track/Pattern Settings
  // tracks,
  pattern,
  bars,
  instruments,
  volumes,
  // * Audio System
  eventQueue,
});

export default rootReducer;
