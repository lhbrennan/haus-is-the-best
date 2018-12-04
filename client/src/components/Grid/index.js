import { connect } from 'react-redux';

import Grid from './Grid';
import { getInstruments } from '../../reducers';

const mapStateToProps = state => ({
  resolution: state.resolution,
  instruments: getInstruments(state),
  visibleBar: state.visibleBar,
});

export default connect(mapStateToProps, null)(Grid);
