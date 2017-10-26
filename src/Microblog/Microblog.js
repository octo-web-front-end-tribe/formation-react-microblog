import React, {Component} from 'react';

import MessageListContainer from '../MessageList/MessageListContainer';
import Input from '../Input/Input';

import {messageBox} from '../Body/Body.css';
import {connect} from 'react-redux';

export class Microblog extends Component {
  render() {
    return (
      <div className={messageBox}>
        <Input/>
        <MessageListContainer/>
      </div>
    );
  }
}

export default connect()(Microblog);
