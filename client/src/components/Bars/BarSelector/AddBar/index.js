import { connect } from 'react-redux';
import { incrementBars } from '../../../../actions';

import AddBar from './AddBar';

const mapDispatchToProps = dispatch => ({
  handleClick: () => dispatch(incrementBars()),
});

const AddBarContainer = connect(null, mapDispatchToProps)(AddBar);

export default AddBarContainer;
