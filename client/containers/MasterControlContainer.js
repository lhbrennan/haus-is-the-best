import { connect } from 'react-redux';
import { updateBpm } from '../actions';
// TO-DO: Why can't I remove the '.jsx' extension w/o breaking stuff?
// Maybe because I'm not importing React?
import MasterControl from '../components/MasterControl.jsx';

const mapStateToProps = state => ({ bpm: state.bpm });

const mapDispatchToProps = dispatch => ({ updateBpm: bpm => dispatch(updateBpm(bpm)) });

const MasterControlContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MasterControl);

export default MasterControlContainer;
