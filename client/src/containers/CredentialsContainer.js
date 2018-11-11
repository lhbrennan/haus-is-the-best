import { connect } from 'react-redux';
import axios from 'axios';

import Credentials from '../components/Credentials';
import { loadComposition, updateUsername, updateCompositionName } from '../actions';

const saveComposition = (pattern, swing, bpm, username, compositionName, volumes, bars) => {
  console.log(`Saving Composition... swing: ${swing}, bpm: ${bpm}, bars: ${bars}`);
  axios.post('/compositions', {
    username,
    compositionName,
    pattern,
    swing,
    bpm,
    volumes,
    bars,
  });
};

const loadCompositionHandler = (username, compositionName, dispatch) => {
  console.log(`Loading ${compositionName} by ${username}`);
  axios.get('/compositions', {
    params: {
      username,
      compositionName,
    },
  })
    .then(({ data }) => {
      console.log('data from mongo...', data);
      // console.log(data);
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
  bars: state.bars,
});

const mapDispatchToProps = dispatch => ({
  loadComposition: (username, compositionName) => loadCompositionHandler(username, compositionName, dispatch),
  updateUsername: username => dispatch(updateUsername(username)),
  updateCompositionName: compositionName => dispatch(updateCompositionName(compositionName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Credentials);
