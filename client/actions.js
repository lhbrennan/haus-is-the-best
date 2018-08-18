export function updateBpm(bpm) {
  return {
    type: 'UPDATE_BPM',
    bpm,
  };
}

export function updateOverallVolume(volume) {
  return {
    type: 'UPDATE_OVERALL_VOLUME',
    volume,
  };
}

export function updateSwing(swing) {
  return {
    type: 'UPDATE_SWING',
    swing,
  };
}

export function togglePlaying() {
  return {
    type: 'TOGGLE_PLAYING',
  };
}

export function updatePattern(instrument, beat, subBeat) {
  const stepNum = ((beat - 1) * 4) + subBeat - 1;
  return {
    type: 'UPDATE_PATTERN',
    stepNum,
    instrument,
  };
}

export function loadComposition(composition) {
  return {
    type: 'LOAD_COMPOSITION',
    payload: composition,
  };
}

export function resetPattern() {
  return {
    type: 'RESET_PATTERN',
  };
}

export function updateInstrumentVolume(newVolume, instrument) {
  const volume = newVolume * newVolume; // use x-squared since linear does not sound good
  console.log(`changing ${instrument} volume to ${volume}`);
  return {
    type: 'UPDATE_INSTRUMENT_VOLUME',
    volume,
    instrument,
  };
}
