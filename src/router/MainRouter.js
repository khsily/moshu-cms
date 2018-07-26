import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { appName, nav, appIcon } from '../config';

import {
  TestDocPage,
  HomePage,
  NotFoundPage,
} from '../pages';

import {
  Header,
} from '../components';

const isDev = process.env.NODE_ENV === 'development';

class MainRouter extends Component {
  render() {
    return (
      <div id='app'>
        <Header appIcon={appIcon} appName={appName} nav={nav} />
        <Switch>
          {isDev && <Route exact path='/test-doc' component={TestDocPage} />}
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default MainRouter