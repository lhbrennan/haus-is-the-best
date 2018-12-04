import { connect } from 'react-redux';

import Grid from './Grid';
import { getInstruments, getPadSound } from '../../reducers';

const mapStateToProps = state => ({
  resolution: state.resolution,
  instruments: getInstruments(state),
  padSound: getPadSound(state),
  visibleBar: state.visibleBar,
});

export default connect(mapStateToProps, null)(Grid);
