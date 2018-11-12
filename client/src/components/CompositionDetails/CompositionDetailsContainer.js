import { connect } from 'react-redux';

import CompositionDetails from './CompositionDetails';
import { updateUsername, updateCompositionName } from '../../actions';

const mapStateToProps = state => ({
  username: state.username,
  compositionName: state.compositionName,

});

const mapDispatchToProps = dispatch => ({
  updateUsername: username => dispatch(updateUsername(username)),
  updateCompositionName: compositionName => dispatch(updateCompositionName(compositionName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompositionDetails);
