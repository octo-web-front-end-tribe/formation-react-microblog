export const UPDATE_MESSAGES = 'UPDATE_MESSAGES';

export function updateMessages(messages) {
  return {
    type: UPDATE_MESSAGES,
    messages,
  };
}
