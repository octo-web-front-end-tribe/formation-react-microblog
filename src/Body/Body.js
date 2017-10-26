import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import MessageListContainer from '../MessageList/MessageListContainer';
import Input from '../Input/Input';
import { fetchMessages } from '../ApiHelper/ApiHelper';

import { messageBox } from './Body.css';
import About from '../About/About';
import { connect } from 'react-redux';
import { updateMessages } from '../Store/messagesActions';

export class Body extends Component {
  componentWillMount() {
    fetchMessages()
      .then(({ data }) => {
        this.props.dispatch(updateMessages(data));
      });
  }

  render() {
    return (<Switch>
      <Route
        path="/about"
        component={About}
      />
      <Route
        render={() => (
          <div className={messageBox}>
            <Input />
            <MessageListContainer />
          </div>
        )}
      />
    </Switch>);
  }
}

export default connect()(Body);
