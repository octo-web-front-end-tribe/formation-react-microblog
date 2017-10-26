import { UPDATE_MESSAGES } from './messagesActions';

const initialState = [{ id: 1, author: 'initial', content: 'content' }];

export default function messagesReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_MESSAGES:
      return action.messages;
    default:
      return state;
  }
}
