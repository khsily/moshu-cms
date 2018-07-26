import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import MainRouter from './router/MainRouter';
import LoginRouter from './router/LoginRouter';
import "./styles/style.css";

import { store, initialize } from './redux/store';

initialize(store.dispatch);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true
    }
  }

  render() {
    const { isLoggedIn } = this.state;
    const RootRouter = isLoggedIn ? MainRouter : LoginRouter;

    return (
      <BrowserRouter>
        <Provider store={store}>
          <Route path="/" component={RootRouter} />
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
