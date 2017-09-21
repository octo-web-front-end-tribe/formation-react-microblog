import React from 'react';
import PropTypes from 'prop-types';
import Message from '../Message/Message';
import { container } from './MessageList.css';

function MessageList({ messages }) {
  return (
    <ul className={container}>
      {messages.map(message => <Message key={message.id} message={message} />)}
    </ul>
  );
}

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object),
};

MessageList.defaultProps = {
  messages: [],
};

export default MessageList;
