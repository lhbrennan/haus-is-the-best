import { combineReducers } from 'redux';
import { DefaultPattern } from './constants';

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
      return new DefaultPattern();
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
    case 'UPDATE_USERNAME':
      return action.username;
    case 'LOAD_COMPOSITION':
      return action.payload.username;
    default:
      return state;
  }
}

function compositionName(state = 'composition1', action) {
  switch (action.type) {
    case 'UPDATE_COMPOSITION_NAME':
      return action.compositionName;
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
      console.log('new overallVolume', action.volume);
      return action.volume;
    default:
      return state;
  }
}

function volumes(state = {}, action) {
  const { volume, instrument, type } = action;
  switch (type) {
    case 'UPDATE_INSTRUMENT_VOLUME':
      return Object.assign({}, state, { [instrument]: volume });
    case 'LOAD_COMPOSITION':
      return action.payload.volumes || state;
    default:
      return state;
  }
}

function bars(state = 1, action) {
  switch (action.type) {
    case 'UPDATE_BARS':
      return action.bars;
    case 'LOAD_COMPOSITION':
      return action.payload.bars || 1;
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
    case 'QUEUE_EVENT':
      return [...state, action.instrument];
    case 'DEQUEUE_EVENT':
      return [...state].slice(1);
    default:
      return state;
  }
}

function padResponse(state = true, action) {
  switch (action.type) {
    case 'TOGGLE_PAD_RESPONSE':
      return !state;
    default:
      return state;
  }
}

function visibleBar(state = 1, action) {
  switch (action.type) {
    case 'SELECT_BAR':
      return action.bar;
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
  bars,
  resolution,
  eventQueue,
  padResponse,
  visibleBar,
});
