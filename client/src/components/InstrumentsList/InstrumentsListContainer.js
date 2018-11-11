import { connect } from 'react-redux';
import LeftPanel from './InstrumentsList';

const mapStateToProps = state => (
  { instruments: state.instruments }
);

export default connect(mapStateToProps, null)(LeftPanel);
