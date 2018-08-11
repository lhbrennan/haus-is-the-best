function updateBpm(bpm) {
  console.log('updating bpm to', bpm);
  return {
    type: 'UPDATE_BPM',
    bpm,
  };
}

export default updateBpm;
