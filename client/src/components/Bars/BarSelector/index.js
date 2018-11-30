import { connect } from 'react-redux';

import BarSelector from './BarSelector';
import { selectBar } from '../../../actions';
import { getBars } from '../../../reducers';

const mapStateToProps = state => ({
  bars: getBars(state),
  visibleBar: state.visibleBar,
});

const mapDispatchToProps = dispatch => ({
  selectBar: bar => dispatch(selectBar(Number(bar))),
});

export default connect(mapStateToProps, mapDispatchToProps)(BarSelector);
