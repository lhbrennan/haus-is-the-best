import { connect } from 'react-redux';

import TogglePadSound from './TogglePadSound';

import { togglePadSound } from '../../../actions';
import { getPadSound } from '../../../reducers';

const mapStateToProps = state => ({
  padSound: getPadSound(state),
});

const mapDispatchToProps = dispatch => ({
  handleClick: () => dispatch(togglePadSound()),
});

const TogglePadSoundContainer = connect(mapStateToProps, mapDispatchToProps)(TogglePadSound);

export default TogglePadSoundContainer;
