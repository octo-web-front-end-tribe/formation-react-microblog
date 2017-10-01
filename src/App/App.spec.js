import React from 'react';
import chaiEnzyme from 'chai-enzyme';
import sinonChai from 'sinon-chai';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';

import * as ApiHelper from '../ApiHelper/ApiHelper';

import MessageList from '../MessageList/MessageList';
import Input from '../Input/Input';

import App from './App';

chai.use(chaiEnzyme());
chai.use(sinonChai);

describe('App component', () => {
  describe('initial render', () => {
    it('should have an empty list of messages in state', () => {
      const wrapper = shallow(<App />);

      expect(wrapper.state('messages')).to.deep.equal([]);
    });
  });

  describe('data fetching', () => {
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

  describe('Input element', () => {
    it('should have an Input element', () => {
      const wrapper = shallow(<App />);

      expect(wrapper).to.have.exactly(1).descendants(Input);
    });

    it('should have the right function onEnter', () => {
      const wrapper = shallow(<App />);

      const inputWrapper = wrapper.find(Input);

      expect(inputWrapper).to.have.prop('onEnter', ApiHelper.postMessage);
    });

    describe('when the onEnter prop is invoked', () => {
      beforeEach(() => {
        sinon.stub(ApiHelper, 'postMessage');
      });

      afterEach(() => {
        ApiHelper.postMessage.restore();
      });

      it('should post the message with the right parameters', () => {
        const testMessage = 'This is a test message';

        const wrapper = shallow(<App />);
        const onEnterProp = wrapper
          .find(Input)
          .prop('onEnter');

        onEnterProp(testMessage);

        expect(ApiHelper.postMessage).to.have.been.calledWith(testMessage);
      });
    });
  });
});
