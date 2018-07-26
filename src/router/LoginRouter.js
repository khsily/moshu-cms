import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import {
  LoginPage
} from '../pages';

class LoginRouter extends Component {
  render() {
    return (
      <div id='app'>
        <Route path="/" component={LoginPage} />
      </div>
    );
  }
}

export default LoginRouter;