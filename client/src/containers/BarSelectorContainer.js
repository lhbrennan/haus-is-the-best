import { connect } from 'react-redux';
import BarSelector from '../components/BarSelector';
import { selectBar } from '../actions';

const mapStateToProps = state => ({
  bars: state.bars,
  visibleBar: state.visibleBar,
});

const mapDispatchToProps = dispatch => ({
  selectBar: bar => dispatch(selectBar(Number(bar))),
});

export default connect(mapStateToProps, mapDispatchToProps)(BarSelector);
