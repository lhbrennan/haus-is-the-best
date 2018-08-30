import { connect } from 'react-redux';
import axios from 'axios';

import Credentials from '../components/Credentials';
import { loadComposition, updateUsername, updateCompositionName } from '../actions';

const saveComposition = (pattern, swing, bpm, username, compositionName, volumes) => {
  console.log('saveComposition...');
  axios.post('/compositions', {
    username,
    compositionName,
    pattern,
    swing,
    bpm,
    volumes,
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
  username: state.username,
  compositionName: state.compositionName,
  pattern: state.pattern,
  swing: state.swing,
  bpm: state.bpm,
  volumes: state.volumes,
});

const mapDispatchToProps = dispatch => ({
  loadComposition: (username, compositionName) => loadCompositionHandler(username, compositionName, dispatch),
  updateUsername: username => dispatch(updateUsername(username)),
  updateCompositionName: compositionName => dispatch(updateCompositionName(compositionName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Credentials);
