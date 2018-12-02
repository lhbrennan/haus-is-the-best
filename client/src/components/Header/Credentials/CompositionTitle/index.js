import { connect } from 'react-redux';
import { updateCompositionTitle } from '../../../../actions';

import CompositionTitle from './CompositionTitle';
import { getCompositionTitle } from '../../../../reducers';

const mapStateToProps = state => ({
  compositionTitle: getCompositionTitle(state),
});

const mapDispatchToProps = dispatch => ({
  handleBlur: title => dispatch(updateCompositionTitle(title)),
});

const CompositionTitleContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CompositionTitle);

export default CompositionTitleContainer;
