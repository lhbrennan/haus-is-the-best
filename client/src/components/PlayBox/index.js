import { connect } from 'react-redux';
import { updateOverallVolume, togglePlaying } from '../../actions';
import PlayBox from './PlayBox';

const mapStateToProps = state => ({
  playing: state.playing,
  overallVolume: state.overallVolume,
});

const mapDispatchToProps = dispatch => ({
  updateOverallVolume: volume => dispatch(updateOverallVolume(volume)),
  togglePlaying: () => dispatch(togglePlaying()),
});

const PlayBoxContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlayBox);

export default PlayBoxContainer;
