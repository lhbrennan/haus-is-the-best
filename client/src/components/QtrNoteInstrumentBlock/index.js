import { connect } from 'react-redux';

import { getPattern } from '../../reducers';
import QtrNoteInstrumentBlock from './QtrNoteInstrumentBlock';

const mapStateToProps = (state, ownProps) => ({
  pattern: getPattern(state),
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
