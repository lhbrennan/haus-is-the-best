import { connect } from 'react-redux';
import PerformerSection from './PerformerSection';

const mapStateToProps = state => (
  { instruments: state.instruments }
);

export default connect(mapStateToProps, null)(PerformerSection);
