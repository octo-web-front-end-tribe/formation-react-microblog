import React from 'react';
import {render} from 'react-dom';
import App from './App/App';
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import messagesReducer from "./Store/messagesReducer";

const APP_NAME = 'Microblog React';

const rootReducers = combineReducers({
  messages: messagesReducer,
});

const store = createStore(rootReducers);

render(<Provider store={store}><App name={APP_NAME}/></Provider>, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./App/App.js', () => {
    const UpdatedAppComponent = require('./App/App.js').default; // eslint-disable-line global-require
    render(<UpdatedAppComponent name={APP_NAME}/>, document.getElementById('root'));
  });
}
