import React from 'react';
import PropTypes from 'prop-types';
import { item, author, content } from './Message.css';

function Message({ message }) {
  return (
    <li className={item}>
      <div className={author}>{ message.author }</div>
      <div className={content}>{ message.content }</div>
    </li>
  );
}

Message.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string,
  }),
};

Message.defaultProps = {
  message: {},
};

export default Message;
