import { connect } from 'react-redux';
import Grid from '../components/Grid';

const mapStateToProps = state => ({
  resolution: state.resolution,
  numBeats: state.bars * 4,
  instruments: state.instruments,
  padResponse: state.padResponse,
});

export default connect(mapStateToProps, null)(Grid);
