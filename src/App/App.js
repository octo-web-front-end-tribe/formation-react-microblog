import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MessageList from '../MessageList/MessageList';
import NavigationBar from '../NavigationBar/NavigationBar';
import Input from '../Input/Input';
import { fetchMessages, postMessage } from '../ApiHelper/ApiHelper';

import { container, messageBox } from './App.css';
import About from '../About/About';

const API_URL = 'https://skool-microblog.herokuapp.com/messages';

class App extends Component {
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
    return (
      <BrowserRouter>
        <div className={container}>
          <NavigationBar />
          <Switch>
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
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
