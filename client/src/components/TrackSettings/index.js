import { connect } from 'react-redux';
import TrackSettings from './TrackSettings';

const mapStateToProps = state => (
  { instruments: state.instruments }
);

export default connect(mapStateToProps, null)(TrackSettings);
