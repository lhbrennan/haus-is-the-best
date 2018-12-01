import { connect } from 'react-redux';

import Header from './Header';
import { updateUsername, updateCompositionName } from '../../actions';
import { getUsername, getCompositionName } from '../../reducers';

const mapStateToProps = state => ({
  username: getUsername(state),
  compositionName: getCompositionName(state),
});

const mapDispatchToProps = dispatch => ({
  updateUsername: username => dispatch(updateUsername(username)),
  updateCompositionName: compositionName => dispatch(updateCompositionName(compositionName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
