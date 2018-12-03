import { createAction } from 'redux-actions';
import * as types from './actionTypes';

// * ACTION CREATORS
export const updateBpm = createAction(types.BPM_UPDATE);

export const updateOverallVolume = createAction(types.OVERALL_VOLUME_UPDATE);

export const updateSwing = createAction(types.SWING_UPDATE);

export const togglePlaying = createAction(types.PLAYING_TOGGLE);

export const updatePattern = createAction(types.PATTERN_UPDATE, (instrument, beat, subBeat) => {
  const stepNum = ((beat - 1) * 4) + subBeat - 1;
  return { stepNum, instrument };
});

export const loadComposition = createAction(types.COMPOSITION_LOAD);

export const resetPattern = createAction(types.PATTERN_RESET);

export const updateInstrumentVolume = createAction(
  types.INSTRUMENT_VOLUME_UPDATE,
  (newVolume, instrument) => {
    const volume = newVolume * newVolume; // use x-squared since linear does not sound good
    return { volume, instrument };
  },
);

export const queueEvent = createAction(types.QUEUE_EVENT);

export const dequeueEvent = createAction(types.DEQUEUE_EVENT);

export const togglePadResponse = createAction(types.PAD_RESPONSE_TOGGLE);

export const incrementBars = createAction(types.BARS_INCREMENT);

export const selectBar = createAction(types.BAR_SELECT);

export const updateUsername = createAction(types.USERNAME_UPDATE);

export const updateCompositionTitle = createAction(types.COMPOSITION_TITLE_UPDATE);

export const duplicatePattern = createAction(types.PATTERN_DUPLICATE);
