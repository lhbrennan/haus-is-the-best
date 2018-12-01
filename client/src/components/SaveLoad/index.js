import { connect } from 'react-redux';
import axios from 'axios';

import SaveLoad from './SaveLoad';
import { loadComposition } from '../../actions';

const saveComposition = (composition) => {
  if (composition.username === 'demo') {
    console.log('Cannot overwrite demo compositions');
    return;
  }
  axios.post('/compositions', composition);
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
      dispatch(loadComposition(data));
    })
    .catch((err) => {
      console.error('COMPOSITION LOADING ERROR: \n', err);
    });
};

const mapStateToProps = ({ tracks, swing, bpm, username, compositionName }) => ({
  saveComposition: () => saveComposition({ tracks, swing, bpm, username, compositionName }),
  username,
  compositionName,
});

const mapDispatchToProps = dispatch => ({
  loadComposition: (username, compositionName) => loadCompositionHandler(username, compositionName, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SaveLoad);
