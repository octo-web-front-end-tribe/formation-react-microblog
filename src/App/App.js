import React, { Component } from 'react';

import MessageList from '../MessageList/MessageList';
import { fetchMessages } from '../ApiHelper/ApiHelper';

import { container, messageBox } from './App.css';

const API_URL = 'https://skool-microblog.herokuapp.com/messages';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
    };
  }

  componentWillMount() {
    fetchMessages(API_URL).then(({ data }) => {
      this.setState({
        messages: data,
      });
    });
  }

  render() {
    return (
      <div className={container}>
        <div className={messageBox}>
          <MessageList messages={this.state.messages} />
        </div>
      </div>
    );
  }
}

export default App;
