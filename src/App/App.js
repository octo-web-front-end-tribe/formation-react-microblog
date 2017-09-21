import React from 'react';

import MessageList from '../MessageList/MessageList';

import { container, messageBox } from './App.css';

const fakeMessages = [
  { id: '1', author: 'Anass', content: 'JS is amazing' },
  { id: '2', author: 'Roman', content: 'JS is impressive' },
];

function App() {
  return (
    <div className={container}>
      <div className={messageBox}>
        <MessageList messages={fakeMessages} />
      </div>
    </div>
  );
}

export default App;
