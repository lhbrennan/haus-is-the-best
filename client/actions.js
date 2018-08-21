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

export function queueEvent(instrument) {
  return {
    type: 'QUEUE_EVENT',
    instrument,
  };
}

export function dequeueEvent() {
  return {
    type: 'DEQUEUE_EVENT',
  };
}

export function togglePadResponse() {
  return {
    type: 'TOGGLE_PAD_RESPONSE',
  };
}

export function updateBars(bars) {
  return {
    type: 'UPDATE_BARS',
    bars,
  };
}

export function selectBar(bar) {
  console.log('new visible bar', bar);
  return {
    type: 'SELECT_BAR',
    bar,
  };
}

export function updateUsername(username) {
  return {
    type: 'UPDATE_USERNAME',
    username,
  };
}

export function updateCompositionName(compositionName) {
  return {
    type: 'UPDATE_COMPOSITION_NAME',
    compositionName,
  };
}
