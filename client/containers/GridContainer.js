import { connect } from 'react-redux';
import Grid from '../components/Grid.jsx';

const triggerSample = (instrument) => {
  // this.playNote(instrument, 0);
  return;
}

const mapStateToProps = state => ({
  resolution: state.resolution,
  numBeats: state.bars * 4,
  instruments: state.instruments,
  padResponse: state.padResponse,
  triggerSample,
});

export default connect(mapStateToProps, null)(Grid);
