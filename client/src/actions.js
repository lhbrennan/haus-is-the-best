import { createAction } from 'redux-actions';
import * as types from './actionTypes';

// * ACTION CREATORS
export const updateBpm = createAction(types.BPM_UPDATE);

export const updateOverallVolume = createAction(types.OVERALL_VOLUME_UPDATE);

export const updateSwing = createAction(types.SWING_UPDATE);

export const togglePlaying = createAction(types.PLAYING_TOGGLE);

export const updatePattern = (instrument, beat, subBeat) => {
  const stepNum = ((beat - 1) * 4) + subBeat - 1;
  return {
    type: types.UPDATE_PATTERN,
    payload: {
      stepNum,
      instrument,
    },
  };
};

export const loadComposition = createAction(types.COMPOSITION_LOAD);

export const resetPattern = createAction(types.PATTERN_RESET);

export const updateInstrumentVolume = (newVolume, instrument) => {
  const volume = newVolume * newVolume; // use x-squared since linear does not sound good
  console.log(`changing ${instrument} volume to ${volume}`);
  return {
    type: types.INSTRUMENT_VOLUME_UPDATE,
    payload: {
      volume,
      instrument,
    },
  };
};
export const queueEvent = createAction(types.QUEUE_EVENT);

export const dequeueEvent = createAction(types.DEQUEUE_EVENT);

export const togglePadResponse = createAction(types.PAD_RESPONSE_TOGGLE);

export const updateBars = createAction(types.BARS_UPDATE);

export const selectBar = createAction(types.BAR_SELECT);

export const updateUsername = createAction(types.USERNAME_UPDATE);

export const updateCompositionName = createAction(types.COMPOSITION_NAME_UPDATE);

export const duplicatePattern = createAction(types.PATTERN_DUPLICATE);
