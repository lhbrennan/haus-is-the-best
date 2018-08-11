import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './store';
import App from './App.jsx';

const store = createStore({ bpm: 120 });

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));