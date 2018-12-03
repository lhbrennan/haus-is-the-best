import { connect } from 'react-redux';
import axios from 'axios';

import SaveLoad from './SaveLoad';
import { loadComposition } from '../../../../actions';

const saveComposition = (composition) => {
  if (composition.username === 'demo') {
    console.log('Cannot overwrite demo compositions');
    return;
  }
  console.log(`saving compositionTitle: ${composition.compositionTitle}`);
  axios.post('/compositions', composition);
};

const loadCompositionHandler = (username, compositionTitle, dispatch) => {
  console.log(`Loading ${compositionTitle} by ${username}`);
  axios.get('/compositions', {
    params: {
      username,
      compositionTitle,
    },
  })
    .then(({ data }) => {
      dispatch(loadComposition(data));
    })
    .catch((err) => {
      console.error('COMPOSITION LOADING ERROR: \n', err);
    });
};

const mapStateToProps = ({ tracks, swing, bpm, username, compositionTitle }) => ({
  saveComposition: () => saveComposition({ tracks, swing, bpm, username, compositionTitle }),
  username,
  compositionTitle,
});

const mapDispatchToProps = dispatch => ({
  loadComposition: (username, compositionTitle) => loadCompositionHandler(username, compositionTitle, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SaveLoad);
