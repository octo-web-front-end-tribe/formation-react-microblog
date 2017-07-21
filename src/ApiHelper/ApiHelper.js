import axios from 'axios';

export const API_URL = 'https://skool-microblog.herokuapp.com/messages';

export function fetchMessages() {
  return axios
    .get(API_URL);
}

export function postMessage(message, author = 'John Doe') {
  return axios
    .post(API_URL, {
      author,
      content: message,
    });
}
