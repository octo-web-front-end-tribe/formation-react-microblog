import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import MessageList from '../MessageList/MessageList';
import Input from '../Input/Input';
import { fetchMessages, postMessage } from '../ApiHelper/ApiHelper';

import { messageBox } from './Body.css';
import About from '../About/About';

const API_URL = 'https://skool-microblog.herokuapp.com/messages';

export default class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
    };

    this.refreshList = this.refreshList.bind(this);
    this.postMessageAndRefreshList = this.postMessageAndRefreshList.bind(this);
  }

  componentWillMount() {
    this.refreshList();
  }

  refreshList() {
    return fetchMessages(API_URL)
      .then(({ data }) => {
        this.setState({
          messages: data,
        });
      });
  }

  postMessageAndRefreshList(message) {
    return postMessage(message)
      .then(this.refreshList);
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
            <Input onEnter={this.postMessageAndRefreshList} />
            <MessageList messages={this.state.messages} />
          </div>
        )}
      />
    </Switch>);
  }
}
