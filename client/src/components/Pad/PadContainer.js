import { connect } from 'react-redux';
import { updatePattern, queueEvent } from '../../actions';
import Pad from './Pad';

const mapStateToProps = (state, ownProps) => ({
  instrument: ownProps.instrument,
  velocity: ownProps.velocity,
  beat: ownProps.beat,
  subBeat: ownProps.subBeat,
  padResponse: state.padResponse,
});

const mapDispatchToProps = dispatch => ({
  triggerSample: instrument => dispatch(queueEvent(instrument)),
  updatePattern: (instrument, beat, subBeat) => dispatch(updatePattern(instrument, beat, subBeat)),
});

const PadContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pad);

export default PadContainer;
