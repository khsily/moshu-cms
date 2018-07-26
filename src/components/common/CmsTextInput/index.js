import React, { Component } from 'react';
import { CmsButton } from '../../';

import './CmsTextInput.css';

class CmsTextInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focused: false,
      fileName: '파일 선택',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
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
      type,
      onChange,
      ...rest,
    } = this.props;
    const { focused, fileName } = this.state;

    return (
      <label
        style={wrapperStyle}
        className={`cms-text-input 
          ${focused && 'focused'} 
          ${wrapperClassName} 
          ${withBtn ? 'with-btn' : ''}
          ${type === 'file' ? 'file' : ''}`}>
        {type === 'file' && <span className='file-name'>{fileName}</span>}
        <input
          className={`cms-text-input__input ${className}`}
          onFocus={() => this.handleFocus(true)}
          onBlur={() => this.handleFocus(false)}
          onChange={this.handleInputChange}
          type={type}
          {...rest} />
        {withBtn &&
          <CmsButton
            className={`cms-text-input__btn ${btbClassName}`}
            btnType={btnType}>
            {btnValue}
          </CmsButton>
        }
      </label>
    )
  }

  handleFocus(focused) {
    if (this.props.focusControl) this.setState({ focused });
  }

  handleInputChange(e) {
    const { type, onChange } = this.props;

    if (type !== 'file') {
      if (onChange) onChange(e);
      return
    }

    this.setState({ fileName: e.target.files[0].name });
    if (onChange) onChange(e);
  }
}

export default CmsTextInput;

CmsTextInput.defaultProps = {
  focusControl: true,
}