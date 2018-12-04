import { connect } from 'react-redux';

import Pad from './Pad';

import { updatePattern, queueEvent } from '../../actions';
import { getPadSound } from '../../reducers';

const mapStateToProps = (state, ownProps) => ({
  instrument: ownProps.instrument,
  velocity: ownProps.velocity,
  beat: ownProps.beat,
  subBeat: ownProps.subBeat,
  padSound: getPadSound(state),
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
