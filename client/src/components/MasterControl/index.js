import { connect } from 'react-redux';

import { resetPattern } from '../../actions';
import { getVolumes, getBpm, getPattern, getUsername } from '../../reducers';
import MasterControl from './MasterControl';

const mapStateToProps = state => ({
  pattern: getPattern(state),
  swing: state.swing,
  bpm: getBpm(state),
  username: getUsername(state),
  volumes: getVolumes(state),
});

const mapDispatchToProps = dispatch => ({
  resetPattern: () => dispatch(resetPattern()),
});

const MasterControlContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MasterControl);

export default MasterControlContainer;
