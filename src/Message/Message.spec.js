import React from 'react';
import chaiEnzyme from 'chai-enzyme';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import Message from './Message';

chai.use(chaiEnzyme());

describe('Message component', () => {
  const fakeMessage = {
    id: 'abcd',
    content: 'ceci est un message',
    author: 'ceci est un auteur',
  };

  it('Should render author message', () => {
    const wrapper = shallow(<Message message={fakeMessage} />);

    expect(wrapper.find('div').at(0)).to.contain.text(fakeMessage.author);
  });

  it('Should render content message', () => {
    const wrapper = shallow(<Message message={fakeMessage} />);

    expect(wrapper.find('div').at(1)).to.contain.text(fakeMessage.content);
  });
});
