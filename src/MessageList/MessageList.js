import React from 'react';
import PropTypes from 'prop-types';
import Message from '../Message/Message';
import { container } from './MessageList.css';

class MessageList extends React.Component {
  componentWillMount() {
    setInterval(this.props.getMessages, 10000);
  }

  render(){
    return (
      <ul className={container}>
        {this.props.messages.map(message => <Message key={message.id} message={message} />)}
      </ul>
    );
  }
}

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object),
};

MessageList.defaultProps = {
  messages: [],
};

export default MessageList;
