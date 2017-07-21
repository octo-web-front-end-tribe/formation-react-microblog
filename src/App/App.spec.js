import React from 'react';
import chaiEnzyme from 'chai-enzyme';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import App from './App';

chai.use(chaiEnzyme());

describe('App component', () => {
  it('should display Hello world', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).to.have.text('Hello world');
  });
});
