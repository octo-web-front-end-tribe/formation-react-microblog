import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  navigationBar,
  navigationBarInnerContainer,
  navigationBarUl,
  navigationBarLi,
  navigationBarLink,
  active,
} from './NavigationBar.css';
import MessageNumberContainer from '../MessageNumber/MessageNumberContainer';

const NavigationBar = () => (
  <div className={navigationBar}>
    <div className={navigationBarInnerContainer}>
      <div>
        <ul className={navigationBarUl}>
          <li className={navigationBarLi}>
            <NavLink exact to="/" className={navigationBarLink} activeClassName={active}>
              Accueil
            </NavLink>
          </li>
          <li className={navigationBarLi}>
            <NavLink to="/about" className={navigationBarLink} activeClassName={active}>
              À propos
            </NavLink>
          </li>
        </ul>
      </div>
      <MessageNumberContainer />
    </div>
  </div>
);

export default NavigationBar;
