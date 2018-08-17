import { connect } from 'react-redux';
import { updatePattern } from '../actions';
import Pad from '../components/Pad.jsx';

const mapStateToProps = (state, ownProps) => ({
  instrument: ownProps.instrument,
  velocity: ownProps.velocity,
  beat: ownProps.beat,
  subBeat: ownProps.subBeat,
  padResponse: state.padResponse,
});

const mapDispatchToProps = dispatch => ({
  // triggerSample: bpm => dispatch(updateBpm(bpm)),
  updatePattern: (instrument, beat, subBeat) => dispatch(updatePattern(instrument, beat, subBeat)),
});

const PadContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pad);

export default PadContainer;
