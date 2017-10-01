/* eslint no-unused-expressions : 0 */

import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinonChai from 'sinon-chai';
import { spy } from 'sinon';

import Input from './Input';

chai.use(sinonChai);
chai.use(chaiEnzyme());

describe('InputMessage component', () => {
  describe('initial render', () => {
    it('should render an input element', () => {
      const wrapper = shallow(<Input />);

      expect(wrapper).to.have.exactly(1).descendants('input');
    });

    it('should have the right initial state', () => {
      const wrapper = shallow(<Input />);

      expect(wrapper).to.have.state('inputValue', '');
    });
  });

  describe('on input change', () => {
    it('should set the state with the input value', () => {
      const wrapper = shallow(<Input />);

      wrapper
        .find('input')
        .simulate('change', { target: { value: 'value' } });

      expect(wrapper).to.have.state('inputValue', 'value');
    });

    it('should pass the state value to the input in props', () => {
      const wrapper = shallow(<Input />);

      wrapper.setState({ inputValue: 'value' });
      const inputElement = wrapper.find('input');

      expect(inputElement).to.have.prop('value', 'value');
    });
  });

  describe('on key pressed', () => {
    describe('when the key is enter', () => {
      it('should call the onEnter function', () => {
        const onEnter = spy();
        const wrapper = shallow(<Input onEnter={onEnter} />);

        wrapper
          .setState({ inputValue: 'value' })
          .find('input')
          .simulate('keyPress', { key: 'Enter' });

        expect(onEnter).to.have.been.calledWith('value');
      });
    });

    describe('when the key is not enter', () => {
      it('should not call the the onEnter function', () => {
        const onEnter = spy();
        const wrapper = shallow(<Input onEnter={onEnter} />);

        wrapper
          .setState({ inputValue: 'value' })
          .simulate('keyPress', { key: 'someRandomKey' });

        expect(onEnter).to.not.have.been.called;
      });
    });
  });
});
