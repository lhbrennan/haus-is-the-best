import { connect } from 'react-redux';
import axios from 'axios';

import SaveLoad from './SaveLoad';
import { loadComposition } from '../../actions';

const saveComposition = ({ pattern, swing, bpm, username, compositionName, volumes, bars }) => {
  if (username === 'demo') {
    console.log('Cannot overwrite demo compositions');
    return;
  }
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
      console.log('data', data);
      dispatch(loadComposition(data));
    })
    .catch((err) => {
      console.error('COMPOSITION LOADING ERROR: \n', err);
    });
};

const mapStateToProps = state => ({
  saveComposition: () => saveComposition(state),
  username: state.username,
  compositionName: state.compositionName,
});

const mapDispatchToProps = dispatch => ({
  loadComposition: (username, compositionName) => loadCompositionHandler(username, compositionName, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SaveLoad);
