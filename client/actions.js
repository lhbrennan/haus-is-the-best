export function updateBpm(bpm) {
  console.log('updating bpm to', bpm);
  return {
    type: 'UPDATE_BPM',
    bpm,
  };
}

export function updateOverallVolume(volume) {
  return {
    type: 'UPDATE_VOLUME',
    volume,
  };
}
