import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { defaultTracks, defaultInstruments, defaultVolumes, DefaultPattern } from './constants';
import * as types from './actionTypes';

// const tracks = handleActions({

//   PATTERN_UPDATE: (state, { payload: { instrument, stepNum } }) => {
//     const newState = Object.assign({}, state);
//     const newPattern = [...newState.instruments[instrument].pattern];

//     if (newPattern[stepNum] === 0) {
//       newPattern[stepNum] = 5;
//     } else if (newPattern[stepNum] === 1) {
//       newPattern[stepNum] = 0;
//     } else {
//       newPattern[stepNum] -= 2;
//     }
//     newState.instruments[instrument].pattern = newPattern;
//     newState.bars *= 2;
//     return newState;
//   },

//   PATTERN_DUPLICATE: (state) => {
//     const newPattern = {};
//     const instruments = Object.keys(state.instruments);
//     instruments.forEach((instrument) => {
//       const { pattern } = state.instruments[instrument];
//       newPattern[instrument] = [...pattern, ...pattern];
//     });
//     return newPattern;
//   },

//   INSTRUMENT_VOLUME_UPDATE: (state, { payload: { instrument, volume } }) => {
//     const newState = Object.assign({}, state);
//     newState.instruments[instrument].volume = volume;
//     return newState;
//   },

//   PATTERN_RESET: () => defaultTracks,

//   COMPOSITION_LOAD: () => {},

// }, defaultTracks);

function pattern(state = new DefaultPattern(), action) {
  const { type, payload } = action;
  const newPattern = Object.assign({}, state);
  switch (type) {
    case types.PATTERN_UPDATE: {
      const { instrument, stepNum } = payload;
      if (newPattern[instrument][stepNum] === 0) {
        newPattern[instrument][stepNum] = 5;
      } else if (newPattern[instrument][stepNum] === 1) {
        newPattern[instrument][stepNum] = 0;
      } else {
        newPattern[instrument][stepNum] -= 2;
      }
      return newPattern;
    }
    case types.PATTERN_DUPLICATE: {
      const duplicatedPattern = {};
      const activeInstruments = Object.keys(state);
      activeInstruments.forEach((activeInstrument) => {
        const instrumentPattern = state[activeInstrument];
        duplicatedPattern[activeInstrument] = [...instrumentPattern, ...instrumentPattern];
      });
      return duplicatedPattern;
    }
    case types.COMPOSITION_LOAD:
      return payload.pattern;
    case types.PATTERN_RESET:
      return new DefaultPattern();
    default:
      return state;
  }
}

function volumes(state = defaultVolumes, action) {
  const { payload, type } = action;
  switch (type) {
    case types.INSTRUMENT_VOLUME_UPDATE: {
      const {instrument, volume } = payload;
      return Object.assign({}, state, { [instrument]: volume });
    }
    case types.COMPOSITION_LOAD:
      return action.payload.volumes || state;
    default:
      return state;
  }
}

function bars(state = 1, action) {
  switch (action.type) {
    case types.BARS_UPDATE:
      return action.payload;
    case types.COMPOSITION_LOAD:
      return action.payload.bars || 1;
    case types.PATTERN_RESET:
      return 1;
    case types.PATTERN_DUPLICATE:
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

const bpm = handleActions({
  BPM_UPDATE: (state, action) => action.payload,
  COMPOSITION_LOAD: (state, action) => action.payload.bpm,
}, 120);

// function bpm(state = 120, action) {
//   switch (action.type) {
//     case types.BPM_UPDATE:
//       return action.payload;
//     case types.COMPOSITION_LOAD:
//       return action.payload.bpm;
//     default:
//       return state;
//   }
// }

function username(state = '', action) {
  switch (action.type) {
    case types.USERNAME_UPDATE:
      return action.payload;
    case types.COMPOSITION_LOAD:
      return action.payload.username;
    default:
      return state;
  }
}

function compositionName(state = '', action) {
  switch (action.type) {
    case types.COMPOSITION_NAME_UPDATE:
      return action.payload;
    case types.COMPOSITION_LOAD:
      return action.payload.compositionName;
    default:
      return state;
  }
}

function swing(state = 2.5, action) {
  switch (action.type) {
    case types.SWING_UPDATE:
      return action.payload;
    case types.COMPOSITION_LOAD:
      return action.payload.swing;
    default:
      return state;
  }
}

function playing(state = false, action) {
  switch (action.type) {
    case types.PLAYING_TOGGLE:
      return !state;
    default:
      return state;
  }
}

function overallVolume(state = 1, action) {
  switch (action.type) {
    case types.OVERALL_VOLUME_UPDATE:
      console.log('new overallVolume', action.volume);
      return action.payload;
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
      return [...state, action.payload];
    case types.DEQUEUE_EVENT:
      return [...state].slice(1);
    default:
      return state;
  }
}

function padResponse(state = true, action) {
  switch (action.type) {
    case types.PAD_RESPONSE_TOGGLE:
      return !state;
    default:
      return state;
  }
}

function visibleBar(state = 1, action) {
  switch (action.type) {
    case types.BAR_SELECT:
      return action.payload;
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

// export const getUsername = state => state.username;
// export const getCompositionName = state => state.getCompositionName;
export const getBpm = state => state.bpm;

export const getPattern = (state) => {
  const instruments = Object.keys(state.tracks.instruments);
  const pattern = {};
  instruments.forEach((instrument) => {
    pattern[instrument] = state.tracks.instruments[instrument].pattern;
  });
  return pattern;
};

// export const getBars = state => state.tracks.bars;
export const getBars = state => state.bars;

// export const getInstruments = state => Object.keys(state.tracks.instruments);
export const getInstruments = state => state.instruments;

// export const getVolumes = (state) => {
//   const instruments = Object.keys(state.tracks.instruments);
//   const volumes = {};
//   instruments.forEach((instrument) => {
//     volumes[instrument] = state.tracks.instruments[instrument].volume;
//   });
//   return volumes;
// };
export const getVolumes = state => state.volumes;
