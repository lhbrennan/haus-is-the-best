import { connect } from 'react-redux';

import { updateBars } from '../../../actions';
import NumBars from './NumBars';
import { getBars } from '../../../reducers';

const mapStateToProps = state => ({
  bars: getBars(state),
});

const mapDispatchToProps = dispatch => ({
  updateBars: (bars) => {
    let newBars = Number(bars);
    newBars = newBars > 4 ? 4 : newBars;
    dispatch(updateBars(newBars));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NumBars);
