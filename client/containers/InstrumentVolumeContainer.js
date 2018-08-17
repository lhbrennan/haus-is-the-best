import { connect } from 'react-redux';
import { updateInstrumentVolume } from '../actions.js';
import InstrumentVolume from '../components/InstrumentVolume.jsx';

console.log('imported instrument volume updater', updateInstrumentVolume);

const mapStateToProps = (state, ownProps) => ({
  volumes: state.volumes,
  instrument: ownProps.instrument,
});

const mapDispatchToProps = dispatch => ({
  handleVolumeChange: (newVolume, instrument) => {
    console.log('typeof updateInstrumentVolume', typeof updateInstrumentVolume);
    dispatch(updateInstrumentVolume(newVolume, instrument));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InstrumentVolume);
