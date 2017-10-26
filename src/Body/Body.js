import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Microblog from "../Microblog/Microblog";
import About from '../About/About';

export class Body extends Component {
  render() {
    return (<Switch>
      <Route
        path="/about"
        component={About}
      />
      <Route
        exact
        path="/"
        component={Microblog}
      />
    </Switch>);
  }
}

export default Body;
