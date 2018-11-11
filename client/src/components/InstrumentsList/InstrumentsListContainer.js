import { connect } from 'react-redux';
import InstrumentList from './InstrumentsList';

const mapStateToProps = state => (
  { instruments: state.instruments }
);

export default connect(mapStateToProps, null)(InstrumentList);
