import { connect } from 'react-redux';
import { updateBpm, updateSwing, updateOverallVolume } from '../actions';
// TO-DO: Why can't I remove the '.jsx' extension w/o breaking stuff?
// Maybe because I'm not importing React?
import MasterControl from '../components/MasterControl.jsx';

const mapStateToProps = state => ({ bpm: state.bpm });

const mapDispatchToProps = dispatch => ({
  updateBpm: bpm => dispatch(updateBpm(bpm)),
  updateSwing: swing => dispatch(updateSwing(swing)),
  updateOverallVolume: volume => dispatch(updateOverallVolume(volume)),
});

const MasterControlContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MasterControl);

export default MasterControlContainer;
