import React from 'react';
import chaiEnzyme from 'chai-enzyme';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';

import App from './App';

import MessageList from '../MessageList/MessageList';

chai.use(chaiEnzyme());

describe('App component', () => {
  it('Should render a MessageList component with props', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).to.have.exactly(1).descendants(MessageList);
    expect(wrapper.find(MessageList)).to.have.prop('messages').that.deep.equals([
      { id: '1', author: 'Anass', content: 'JS is amazing' },
      { id: '2', author: 'Roman', content: 'JS is impressive' },
    ]);
  });
});
