import React, { Component } from 'react';
import { LoginForm } from '../../components';

class LoginPage extends Component {
  render() {
    return (
      <section id='login-page' className='container center'>
        <LoginForm onSubmit={this.handleLogin}/>
      </section>
    )
  }

  handleLogin(e, values) {
    console.warn(values);
  }
};

export default LoginPage;
