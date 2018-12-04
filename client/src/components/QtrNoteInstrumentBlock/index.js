import { connect } from 'react-redux';

import QtrNoteInstrumentBlock from './QtrNoteInstrumentBlock';

const mapStateToProps = (state, ownProps) => ({
  numPads: ownProps.numPads,
  instrument: ownProps.instrument,
  beat: ownProps.beat,
});

const QtrNoteInstrumentBlockContainer = connect(mapStateToProps, null)(QtrNoteInstrumentBlock);

export default QtrNoteInstrumentBlockContainer;
