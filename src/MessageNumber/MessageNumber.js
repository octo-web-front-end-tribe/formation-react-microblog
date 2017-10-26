import React from 'react';
import { PropTypes } from 'prop-types';

const MessageNumber = ({ totalMessages }) => (
  <div>
      Total messages : {totalMessages}
  </div>
  );

MessageNumber.propTypes = {
  totalMessages: PropTypes.number.isRequired,
};

export default MessageNumber;
