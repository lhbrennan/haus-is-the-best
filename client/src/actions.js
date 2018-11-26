import * as types from './actionTypes';

// * ACTION CREATORS
export const updateBpm = bpm => ({
  type: types.UPDATE_BPM,
  bpm,
});

export const updateOverallVolume = volume => ({
  type: types.UPDATE_OVERALL_VOLUME,
  volume,
});

export const updateSwing = swing => ({
  type: types.UPDATE_SWING,
  swing,
});

export const togglePlaying = () => ({
  type: types.TOGGLE_PLAYING,
});

export const updatePattern = (instrument, beat, subBeat) => {
  const stepNum = ((beat - 1) * 4) + subBeat - 1;
  return {
    type: types.UPDATE_PATTERN,
    stepNum,
    instrument,
  };
};

export const loadComposition = composition => ({
  type: types.LOAD_COMPOSITION,
  payload: composition,
});

export const resetPattern = () => ({
  type: types.RESET_PATTERN,
});

export const updateInstrumentVolume = (newVolume, instrument) => {
  const volume = newVolume * newVolume; // use x-squared since linear does not sound good
  console.log(`changing ${instrument} volume to ${volume}`);
  return {
    type: types.UPDATE_INSTRUMENT_VOLUME,
    volume,
    instrument,
  };
};

export const queueEvent = instrument => ({
  type: types.QUEUE_EVENT,
  instrument,
});

export const dequeueEvent = () => ({
  type: types.DEQUEUE_EVENT,
});

export const togglePadResponse = () => ({
  type: types.TOGGLE_PAD_RESPONSE,
});

export const updateBars = bars => ({
  type: types.UPDATE_BARS,
  bars,
});

export const selectBar = bar => ({
  type: types.SELECT_BAR,
  bar,
});

export const updateUsername = username => ({
  type: types.UPDATE_USERNAME,
  username,
});

export const updateCompositionName = compositionName => ({
  type: types.UPDATE_COMPOSITION_NAME,
  compositionName,
});

export const duplicatePattern = () => ({
  type: types.DUPLICATE_PATTERN,
});
