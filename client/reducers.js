import { combineReducers } from 'redux';

function bpm(state = 120, action) {
  switch (action.type) {
    case 'UPDATE_BPM':
      return action.bpm;
    default:
      return state;
  }
}

export default combineReducers({
  bpm,
});
