import { connect } from 'react-redux';

import Header from './Header';
import { updateUsername } from '../../actions';
import { getUsername } from '../../reducers';

const mapStateToProps = state => ({
  username: getUsername(state),
});

const mapDispatchToProps = dispatch => ({
  updateUsername: username => dispatch(updateUsername(username)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
