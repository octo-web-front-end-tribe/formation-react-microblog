import React from 'react';
import { render } from 'react-dom';
import App from './App/App';

const APP_NAME = 'Microblog React';

render(<App name={APP_NAME} />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./App/App.js', () => {
    const UpdatedAppComponent = require('./App/App.js').default; // eslint-disable-line global-require
    render(<UpdatedAppComponent name={APP_NAME} />, document.getElementById('root'));
  });
}
