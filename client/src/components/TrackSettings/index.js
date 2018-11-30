import { connect } from 'react-redux';

import { getInstruments } from '../../reducers';
import TrackSettings from './TrackSettings';

const mapStateToProps = state => (
  { instruments: getInstruments(state) }
);

export default connect(mapStateToProps, null)(TrackSettings);
