import React from 'react';
import chaiEnzyme from 'chai-enzyme';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import App from './App';

chai.use(chaiEnzyme());

describe('App component', () => {
  it('should render default hello message', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).to.contain.text('Hello OCTO !');
  });

  it('Should render hello message with the right props', () => {
    const wrapper = shallow(<App name={'myName'} />);

    expect(wrapper).to.contain.text('Hello myName !');
  });
});
