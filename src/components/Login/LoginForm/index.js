import React, { Component } from 'react'
import { CmsTextInput, CmsBox, CmsButton } from '../..';

import './LoginForm.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      pw: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    const { id, pw } = this.state;

    return (
      <form id='login-form' onSubmit={this.handleSubmit}>
        <CmsBox className='login-form__wrapper' boxType='content'>
          <label className='login-form__input-wrapper'>
            <span className='login-form__label'>ID</span>
            <CmsTextInput
              wrapperClassName='login-form__input'
              onChange={this.handleInputChange}
              name='id'
              value={id} />
          </label>
          <label className='login-form__input-wrapper'>
            <span className='login-form__label'>PASSWORD</span>
            <CmsTextInput
              wrapperClassName='login-form__input'
              onChange={this.handleInputChange}
              type='password'
              autoComplete="new-password"
              name='pw'
              value={pw} />
          </label>
          <CmsButton className='login-form__btn'>LOGIN</CmsButton>
        </CmsBox>
      </form>
    );
  }

  handleInputChange(e) {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { onSubmit } = this.props;
    if (onSubmit) onSubmit(e, this.state);

    return false;
  }
}

export default LoginForm
