import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavigationBar from '../NavigationBar/NavigationBar';
import Body from '../Body/Body';
import { container } from './App.css';


const App = () => (
  <BrowserRouter>
    <div className={container}>
      <NavigationBar />
      <Body />
    </div>
  </BrowserRouter>
);

export default App;
