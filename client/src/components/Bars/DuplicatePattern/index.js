import { connect } from 'react-redux';
import { duplicatePattern } from '../../../actions';

import DuplicatePattern from './DuplicatePattern';

const mapDispatchToProps = dispatch => ({
  handleClick: () => dispatch(duplicatePattern()),
});

const DuplicatePatternContainer = connect(null, mapDispatchToProps)(DuplicatePattern);

export default DuplicatePatternContainer;
