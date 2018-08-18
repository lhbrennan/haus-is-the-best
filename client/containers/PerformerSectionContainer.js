import { connect } from 'react-redux';
import PerformerSection from '../components/PerformerSection.jsx';

const mapStateToProps = state => ({
  instruments: state.instruments,
});

export default connect(mapStateToProps, null)(PerformerSection);
