import { connect } from 'react-redux';
import InstrumentGroup from '../components/InstrumentGroup.jsx';

const mapStateToProps = (state, ownProps) => ({
  pattern: state.pattern,
  numPads: ownProps.numPads,
  instrument: ownProps.instrument,
  beat: ownProps.beat,
  key: ownProps.instrument,
  triggerSample: ownProps.triggerSample,
  padResponse: ownProps.padResponse,
});

// const mapDispatchToProps = dispatch => ({
//   // triggerSample: bpm => dispatch(updateBpm(bpm)),
//   updatePattern: (instrument, beat, subBeat) => dispatch(updatePattern(instrument, beat, subBeat)),
// });

const InstrumentGroupContainer = connect(
  mapStateToProps,
  null,
)(InstrumentGroup);

export default InstrumentGroupContainer;
