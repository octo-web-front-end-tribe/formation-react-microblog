import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from './App';
import NavigationBar from '../NavigationBar/NavigationBar';
import Body from '../Body/Body';

describe('App component', () => {
  it('Should show NavigationBar', () => {
    const app = shallow(<App />);

    expect(app.find(NavigationBar)).to.have.length(1);
  });

  it('Should show Body', () => {
    const app = shallow(<App />);

    expect(app.find(Body)).to.have.length(1);
  });
});
