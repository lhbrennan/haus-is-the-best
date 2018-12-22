import { connect } from 'react-redux';

import Pad from './Pad';

import { updatePattern, queueEvent } from '../../actions';
import { getPadSound, getVelocity } from '../../reducers';

const shouldAnimate = (activeSixteenthNote, beat, subBeat, playing, velocity) => (
  activeSixteenthNote === ((beat - 1) * 4) + subBeat
  && playing
  && velocity
);

const mapStateToProps = (state, ownProps) => {
  const { instrument, beat, subBeat } = ownProps;
  const velocity = getVelocity(state, instrument, beat, subBeat);

  return {
    instrument,
    beat,
    subBeat,
    velocity,
    padSound: getPadSound(state),
    animate: shouldAnimate(
      state.activeSixteenthNote,
      beat,
      subBeat,
      state.playing,
      velocity,
    ),
  };
};

const mapDispatchToProps = dispatch => ({
  triggerSample: instrument => dispatch(queueEvent(instrument)),
  updatePattern: (instrument, beat, subBeat) => dispatch(updatePattern(instrument, beat, subBeat)),
});

const PadContainer = connect(mapStateToProps, mapDispatchToProps)(Pad);

export default PadContainer;
