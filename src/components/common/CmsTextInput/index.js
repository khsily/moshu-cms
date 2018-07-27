import React, { Component } from 'react';
import { CmsButton } from '../../';

import './CmsTextInput.css';

class CmsTextInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focused: false,
    }
  }

  render() {
    const {
      className = '',
      wrapperClassName = '',
      btbClassName = '',
      wrapperStyle,
      btnValue,
      focusControl,
      btnType,
      withBtn,
      onChange,
      onBtnClick,
      ...rest,
    } = this.props;
    const { focused } = this.state;

    return (
      <label
        style={wrapperStyle}
        className={`cms-text-input 
          ${focused && 'focused'} 
          ${wrapperClassName} 
          ${withBtn ? 'with-btn' : ''}`}>
        <input
          className={`cms-text-input__input ${className}`}
          onFocus={() => this.handleFocus(true)}
          onBlur={() => this.handleFocus(false)}
          {...rest} />
        {withBtn &&
          <CmsButton
            className={`cms-text-input__btn ${btbClassName}`}
            btnType={btnType}
            onClick={onBtnClick}>
            {btnValue}
          </CmsButton>
        }
      </label>
    )
  }

  handleFocus(focused) {
    if (this.props.focusControl) this.setState({ focused });
  }
}

export default CmsTextInput;

CmsTextInput.defaultProps = {
  focusControl: true,
}