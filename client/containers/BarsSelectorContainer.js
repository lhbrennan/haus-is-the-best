import { connect } from 'react-redux';
import BarsSelector from '../components/BarsSelector';
import selectBar from '../actions';

const mapStateToProps = state => ({
  bars: state.bars,
  visibleBar: state.visibleBar,
});

const mapDispatchToProps = dispatch => ({
  selectBar: (bar) => dispatch(selectBar(bar)),
});

export default connect(mapStateToProps, mapStateToProps)(BarsSelector);