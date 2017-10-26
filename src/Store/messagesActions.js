import {fetchMessages, postMessage} from "../ApiHelper/ApiHelper";

export const UPDATE_MESSAGES = 'UPDATE_MESSAGES';

export function addMessage(message) {
  return (dispatch) => {
    console.log("dispatch : ", dispatch)
    return postMessage(message)
      .then(fetchMessages)
      .then(({data}) => dispatch(updateMessages(data)))
  }
}

export function updateMessages(messages) {
  return {
    type: UPDATE_MESSAGES,
    messages,
  };
}
