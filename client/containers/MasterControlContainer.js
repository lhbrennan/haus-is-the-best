import { connect } from 'react-redux';
// import { } from '../actions';

// TO-DO: Why can't I remove the '.jsx' extension w/o breaking stuff?
// Maybe because I'm not importing React?
import MasterControl from '../components/MasterControl.jsx';

// const mapStateToProps = state => ({ 
// });

// const mapDispatchToProps = dispatch => ({
// });

const MasterControlContainer = connect(
  null,
  null,
)(MasterControl);

export default MasterControlContainer;
