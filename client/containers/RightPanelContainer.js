import { connect } from 'react-redux';
import RightPanel from '../components/RightPanel.jsx';

const mapStateToProps = state => ({
  instruments: state.instruments,
});

export default connect(mapStateToProps, null)(RightPanel);
