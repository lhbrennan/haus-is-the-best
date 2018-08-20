import { connect } from 'react-redux';
import { updateBars } from '../actions';
import NumBars from '../components/NumBars';

const mapStateToProps = state => ({
  bars: state.bars,
});

const mapDispatchToProps = dispatch => ({
  updateBars: bars => dispatch(updateBars(bars)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NumBars);
