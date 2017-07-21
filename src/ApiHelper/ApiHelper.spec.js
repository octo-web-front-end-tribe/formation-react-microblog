import chai, { expect } from 'chai';
import { stub } from 'sinon';
import sinonChai from 'sinon-chai';
import axios from 'axios';

import {
  API_URL,
  fetchMessages,
  postMessage,
} from './ApiHelper';

chai.use(sinonChai);

describe('ApiHelper', () => {
  describe('fetchMessages', () => {
    const mockedMessages = [{
      author: 'author1',
      content: 'Hey! This is fun !',
    }, {
      author: 'author2',
      content: 'Yeah JS rocks !',
    }];

    beforeEach(() => {
      stub(axios, 'get').resolves(mockedMessages);
    });

    afterEach(() => {
      axios.get.restore();
    });

    it('should return the resolved messages', () => fetchMessages()
        .then((messages) => {
          expect(messages).to.deep.equal(mockedMessages);
        }));
  });

  describe('PostMessages', () => {
    beforeEach(() => {
      stub(axios, 'post');
    });

    afterEach(() => {
      axios.post.restore();
    });

    it('should call axios.post with the right params', () => {
      const message = 'message';

      postMessage(message);

      expect(axios.post).to.have.been.calledWith(API_URL, {
        author: 'John Doe',
        content: message,
      });
    });
  });
});
