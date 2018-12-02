import { connect } from 'react-redux';

import Username from './Username';
import { updateUsername } from '../../../../actions';
import { getUsername } from '../../../../reducers';

const mapStateToProps = state => ({
  username: getUsername(state),
});

const mapDispatchToProps = dispatch => ({
  updateUsername: username => dispatch(updateUsername(username)),
});

const UsernameContainer = connect(mapStateToProps, mapDispatchToProps)(Username);

export default UsernameContainer;
