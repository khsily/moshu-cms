import React, { Component, Fragment } from 'react';
import { CmsTextInput } from '../..';

import './CmsFileInput.css';

class CmsFileInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fileName: '',
    }

    this.fileInput = React.createRef();

    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
  }

  render() {
    const { onChange, ...rest } = this.props;
    const { fileName } = this.state;

    return (
      <Fragment>
        <CmsTextInput
          withBtn btnType='small'
          btnValue='업로드'
          {...rest}
          disabled
          onBtnClick={this.handleBtnClick}
          value={fileName} />
        <input
          className='cms-file-input'
          ref={this.fileInput}
          type='file'
          onChange={this.handleFileChange} />
      </Fragment>
    );
  }

  handleBtnClick() {
    this.fileInput.current.click();
  }

  handleFileChange(e) {
    const { onChange } = this.props;
    const { name } = e.target.files[0];
    this.setState({ fileName: name }, () => {
      if(onChange) onChange(e);
    });
  }
}

export default CmsFileInput;
