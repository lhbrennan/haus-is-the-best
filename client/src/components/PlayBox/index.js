import { connect } from 'react-redux';
import { togglePlaying } from '../../actions';
import PlayBox from './PlayBox';

const mapStateToProps = state => ({
  playing: state.playing,
});

const mapDispatchToProps = dispatch => ({
  togglePlaying: () => dispatch(togglePlaying()),
});

const PlayBoxContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlayBox);

export default PlayBoxContainer;
