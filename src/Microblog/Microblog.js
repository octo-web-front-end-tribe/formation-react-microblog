import React, {Component} from 'react';

import MessageListContainer from '../MessageList/MessageListContainer';
import Input from '../Input/Input';
import {fetchMessages} from '../ApiHelper/ApiHelper';

import {messageBox} from '../Body/Body.css';
import {connect} from 'react-redux';
import {updateMessages} from '../Store/messagesActions';

export class Microblog extends Component {
  componentWillMount() {
    fetchMessages()
      .then(({data}) => {
        this.props.dispatch(updateMessages(data));
      });
  }

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
