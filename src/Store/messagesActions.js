import {fetchMessages, postMessage} from "../ApiHelper/ApiHelper";

export const UPDATE_MESSAGES = 'UPDATE_MESSAGES';

export function addMessage(message) {
  return (dispatch) => postMessage(message)
      .then(({data}) => dispatch(getMessages(data)))
}

export function getMessages() {
  return (dispatch) => fetchMessages().then(({data}) => dispatch(updateMessages(data)))
}

export function updateMessages(messages) {
  return {
    type: UPDATE_MESSAGES,
    messages : messages.reverse(),
  };
}
