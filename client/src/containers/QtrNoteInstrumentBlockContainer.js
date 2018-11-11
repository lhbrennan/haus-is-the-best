import { connect } from 'react-redux';
import QtrNoteInstrumentBlock from '../components/QtrNoteInstrumentBlock';

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

const QtrNoteInstrumentBlockContainer = connect(
  mapStateToProps,
  null,
)(QtrNoteInstrumentBlock);

export default QtrNoteInstrumentBlockContainer;
