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

export default combineReducers({
  bpm,
  instruments,
  swing,
});
