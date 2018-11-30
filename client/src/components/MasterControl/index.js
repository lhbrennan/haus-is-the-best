import { connect } from 'react-redux';
import { resetPattern, togglePadResponse } from '../../actions';

import MasterControl from './MasterControl';
import { getBpm } from '../../reducers';

const mapStateToProps = state => ({
  pattern: state.pattern,
  swing: state.swing,
  bpm: getBpm(state),
  compositionName: state.compositionName,
  username: state.username,
  volumes: state.volumes,
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
