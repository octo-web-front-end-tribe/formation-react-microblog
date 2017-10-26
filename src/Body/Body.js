import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import MessageListContainer from '../MessageList/MessageListContainer';
import Input from '../Input/Input';
import { fetchMessages, postMessage } from '../ApiHelper/ApiHelper';

import { messageBox } from './Body.css';
import About from '../About/About';
import { connect } from 'react-redux';
import { updateMessages } from '../Store/messagesActions';

const API_URL = 'https://skool-microblog.herokuapp.com/messages';

export class Body extends Component {
  constructor(props) {
    super(props);
    this.refreshList = this.refreshList.bind(this);
    this.postMessageAndRefreshList = this.postMessageAndRefreshList.bind(this);
  }

  componentWillMount() {
    this.refreshList();
  }

  refreshList() {
    return fetchMessages(API_URL)
      .then(({ data }) => {
        this.props.dispatch(updateMessages(data));
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
            <MessageListContainer />
          </div>
        )}
      />
    </Switch>);
  }
}

export default connect()(Body);
