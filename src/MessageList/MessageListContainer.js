import {connect} from 'react-redux';
import MessageList from './MessageList';
import {getMessages} from "../Store/messagesActions";

export const mapStateToProps = ({messages}) => ({
  messages,
});

export const mapDispatchToProps = {
  getMessages : getMessages
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
