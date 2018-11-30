import { connect } from 'react-redux';
import { updateBpm, updateSwing, updateOverallVolume, togglePlaying } from '../../actions';
import PlayBackSettings from './PlayBackSettings';
import { getBpm } from '../../reducers';


const mapStateToProps = state => ({
  bpm: getBpm(state),
  playing: state.playing,
  swing: state.swing,
  overallVolume: state.overallVolume,
});

const mapDispatchToProps = dispatch => ({
  updateBpm: bpm => dispatch(updateBpm(bpm)),
  updateSwing: swing => dispatch(updateSwing(swing)),
  updateOverallVolume: volume => dispatch(updateOverallVolume(volume)),
  togglePlaying: () => dispatch(togglePlaying()),
});

const PlayBackSettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlayBackSettings);

export default PlayBackSettingsContainer;
