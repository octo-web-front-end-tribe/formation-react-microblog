/* eslint no-unused-expressions : 0 */

import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinonChai from 'sinon-chai';
import { spy } from 'sinon';

import {Input} from './Input';

chai.use(sinonChai);
chai.use(chaiEnzyme());

describe('InputMessage component', () => {
  describe('initial render', () => {
    it('should render an input element', () => {
      const wrapper = shallow(<Input />);

      expect(wrapper).to.have.exactly(1).descendants('input');
    });
  });

  describe('on key pressed', () => {
    describe('when the key is enter', () => {
      it('should dispatch action on enter', () => {
        const dispatchStub = spy();
        const wrapper = shallow(<Input dispatch={dispatchStub}/>);

        wrapper
          .find('input')
          .simulate('keyPress', { key: 'Enter', target : {value : "hey"} });

        expect(dispatchStub).to.have.been.calledOnce;
      });
    });

    describe('when the key is not enter', () => {
      it('should not call the the onEnter function', () => {
        const dispatchStub = spy();
        const wrapper = shallow(<Input dispatch={dispatchStub} />);

        wrapper
          .find('input')
          .simulate('keyPress', { key: 'someRandomKey' });

        expect(dispatchStub).to.not.have.been.called;
      });
    });
  });
});
