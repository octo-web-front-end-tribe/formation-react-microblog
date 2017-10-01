/* eslint no-unused-expressions : 0 */
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
  const fakeMessages = [
    { id: '1', author: 'Anass', content: 'JS is amazing' },
    { id: '2', author: 'Roman', content: 'JS is impressive' },
  ];

  describe('initial render', () => {
    it('should have an empty list of messages in state', () => {
      const wrapper = shallow(<App />);

      expect(wrapper.state('messages')).to.deep.equal([]);
    });
  });

  describe('data fetching', () => {
    describe('When data has been fetched from the api', () => {
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

    describe('when the onEnter prop is invoked', () => {
      const fakePostedMessage = {
        author: 'John Doe',
        content: 'This is a third message !',
      };
      const fakeRefreshedMessages = fakeMessages.concat(fakePostedMessage);

      beforeEach(() => {
        sinon.stub(ApiHelper, 'postMessage').resolves({});
        sinon.stub(ApiHelper, 'fetchMessages')
          .onFirstCall()
          .resolves({ data: fakeMessages })
          .onSecondCall()
          .resolves({ data: fakeRefreshedMessages });
      });

      afterEach(() => {
        ApiHelper.postMessage.restore();
        ApiHelper.fetchMessages.restore();
      });

      it('should post the message with the right parameters', () => {
        const testMessage = 'This is a test message';

        const wrapper = shallow(<App />);
        const onEnterProp = wrapper
          .find(Input)
          .prop('onEnter');

        onEnterProp(testMessage).then(() => {
          expect(ApiHelper.postMessage).to.have.been.calledWith(testMessage);
        });
      });

      it('should fetch the messages from the API once the message is posted', () => {
        const wrapper = shallow(<App />);
        const onEnterProp = wrapper
          .find(Input)
          .prop('onEnter');

        return onEnterProp('foo').then(() => {
          expect(ApiHelper.fetchMessages).to.have.been.calledTwice;
        });
      });

      it('should refresh the message list once the message is posted', () => {
        const wrapper = shallow(<App />);
        const onEnterProp = wrapper
          .find(Input)
          .prop('onEnter');

        return onEnterProp('foo').then(() => {
          expect(wrapper.find(MessageList)).to.have.prop('messages', fakeRefreshedMessages);
        });
      });
    });
  });
});
