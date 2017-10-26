import { connect } from 'react-redux';
import MessageNumber from './MessageNumber';

export const mapStateToProps = ({ messages }) => ({
  totalMessages: messages.length,
});

export default connect(mapStateToProps)(MessageNumber);
