import React from 'react';
import chaiEnzyme from 'chai-enzyme';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';

import App from './App';

import MessageList from '../MessageList/MessageList';
import * as ApiHelper from '../ApiHelper/ApiHelper';

chai.use(chaiEnzyme());

describe('App component', () => {
  describe('initial render', () => {
    it('should have an empty list of messages in state', () => {
      const wrapper = shallow(<App />);

      expect(wrapper.state('messages')).to.deep.equal([]);
    });
  });

  describe('When data has been fetched from the api', () => {
    const fakeMessages = [
      { id: '1', author: 'Anass', content: 'JS is amazing' },
      { id: '2', author: 'Roman', content: 'JS is impressive' },
    ];

    beforeEach(() => {
      const response = { data: fakeMessages };
      sinon.stub(ApiHelper, 'fetchMessages').resolves(response);
    });

    afterEach(() => {
      ApiHelper.fetchMessages.restore();
    });

    it('should have a message list in state', (done) => {
      const wrapper = mount(<App />);

      setImmediate(() => {
        expect(wrapper.state('messages')).to.deep.equal(fakeMessages);
        done();
      });
    });

    it('should render a MessageList with the messages received from api as props', (done) => {
      const wrapper = mount(<App />);

      setImmediate(() => {
        expect(wrapper.find(MessageList).prop('messages')).to.deep.equal(fakeMessages);
        done();
      });
    });
  });
});
