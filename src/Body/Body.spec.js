/* eslint no-unused-expressions : 0 */
import React from 'react';
import chaiEnzyme from 'chai-enzyme';
import sinonChai from 'sinon-chai';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import Body from './Body';

chai.use(chaiEnzyme());
chai.use(sinonChai);


describe('Body component', () => {
  describe('initial render', () => {
    it('should have an empty list of messages in state', () => {
      const wrapper = shallow(<Body />);

      expect(wrapper.state('messages')).to.deep.equal([]);
    });
  });
});
