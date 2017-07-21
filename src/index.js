import React from 'react';
import { render } from 'react-dom';
import App from './App/App';

render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./App/App.js', () => {
    const UpdatedAppComponent = require('./App/App.js').default; // eslint-disable-line global-require
    render(<UpdatedAppComponent />, document.getElementById('root'));
  });
}
