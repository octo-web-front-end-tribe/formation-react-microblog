import { connect } from 'react-redux';
import MessageList from './MessageList';

export const mapStateToProps = ({ messages }) => ({
  messages,
});

export default connect(mapStateToProps)(MessageList);
