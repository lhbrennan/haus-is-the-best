import { connect } from 'react-redux';
import { updateBars } from '../../actions';
import NumBars from './NumBars';

const mapStateToProps = state => ({
  bars: state.bars,
});

const mapDispatchToProps = dispatch => ({
  updateBars: (bars) => {
    let newBars = Number(bars);
    newBars = newBars > 4 ? 4 : newBars;
    dispatch(updateBars(newBars));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NumBars);
