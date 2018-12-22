import { createStore } from 'redux';

import rootReducer from './reducers';

/* eslint-disable no-underscore-dangle */
export default createStore(
  rootReducer,
  {}, // initial store
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // this is for redux dev tools
);
/* eslint-enable */
