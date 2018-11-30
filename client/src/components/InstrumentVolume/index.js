import { connect } from 'react-redux';

import { updateInstrumentVolume } from '../../actions';
import InstrumentVolume from './InstrumentVolume';
import { getVolumes } from '../../reducers';

const mapStateToProps = (state, ownProps) => ({
  volumes: getVolumes(state),
  instrument: ownProps.instrument,
});

const mapDispatchToProps = dispatch => ({
  handleVolumeChange: (newVolume, instrument) => {
    dispatch(updateInstrumentVolume(newVolume, instrument));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InstrumentVolume);
