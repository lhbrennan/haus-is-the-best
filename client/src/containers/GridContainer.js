import { connect } from 'react-redux';
import Grid from '../components/Grid';

const mapStateToProps = state => ({
  resolution: state.resolution,
  instruments: state.instruments,
  padResponse: state.padResponse,
  visibleBar: state.visibleBar,
});

export default connect(mapStateToProps, null)(Grid);
