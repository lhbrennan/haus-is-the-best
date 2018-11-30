import { connect } from 'react-redux';

import { resetPattern, togglePadResponse } from '../../actions';
import { getVolumes, getBpm, getPattern } from '../../reducers';
import MasterControl from './MasterControl';

const mapStateToProps = state => ({
  pattern: getPattern(state),
  swing: state.swing,
  bpm: getBpm(state),
  compositionName: state.compositionName,
  username: state.username,
  volumes: getVolumes(state),
  padResponse: state.padResponse,
});

const mapDispatchToProps = dispatch => ({
  resetPattern: () => dispatch(resetPattern()),
  togglePadResponse: () => dispatch(togglePadResponse()),
});

const MasterControlContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MasterControl);

export default MasterControlContainer;
