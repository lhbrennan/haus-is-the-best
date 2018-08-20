import { connect } from 'react-redux';
import axios from 'axios';
import { loadComposition, resetPattern, togglePadResponse } from '../actions';

// TO-DO: Why can't I remove the '.jsx' extension w/o breaking stuff?
// Maybe because I'm not importing React?
import MasterControl from '../components/MasterControl.jsx';

const saveComposition = (pattern, swing, bpm, username, compositionName) => {
  console.log('saveComposition...');
  axios.post('/compositions', {
    username,
    compositionName,
    pattern,
    swing,
    bpm,
  });
};

const loadCompositionHandler = (username, compositionName, dispatch) => {
  console.log('loadComposition...');
  axios.get('/compositions', {
    params: {
      username,
      compositionName,
    },
  })
    .then(({ data }) => {
      dispatch(loadComposition(data));
    })
    .catch((err) => {
      console.error('COMPOSITION LOADING ERROR: ', err);
    });
};

const mapStateToProps = state => ({
  saveComposition,
  pattern: state.pattern,
  swing: state.swing,
  bpm: state.bpm,
  compositionName: state.compositionName,
  username: state.username,
});

const mapDispatchToProps = dispatch => ({
  loadComposition: (username, compositionName) => loadCompositionHandler(username, compositionName, dispatch),
  resetPattern: () => dispatch(resetPattern()),
  togglePadResponse: () => dispatch(togglePadResponse()),
});

const MasterControlContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MasterControl);

export default MasterControlContainer;
