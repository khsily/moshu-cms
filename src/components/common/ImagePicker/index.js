import React, { Component } from 'react';

import './ImagePicker.css';

class ImagePicker extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    const { image } = nextProps;
    const { url } = prevState;

    if (image && (url != image)) return { url: image };
    return null;
  }

  constructor(props) {
    super(props);

    this.state = {
      image: '',
      url: '',
    }

    this.handleImageSelect = this.handleImageSelect.bind(this);
  }

  render() {
    const { theme = 'gray', className = '', ...rest } = this.props;
    const { url } = this.state;

    return (
      <label className={`image-picker ${theme} ${className}`} {...rest}>
        {url && <img className='image-picker__img' src={url} />}
        {!url && <span className='image-picker__plus'>+</span>}
        <input
          className='iamge-picker__input'
          type='file'
          accept='image/*'
          onChange={this.handleImageSelect} />
      </label>
    );
  }

  handleImageSelect(e) {
    const { onChange } = this.props;
    const image = e.target.files[0];

    this.readURL(image, (url) => {
      this.setState({ image, url });
      if (onChange) onChange(image, url);
    });
  }

  readURL(file, callback) {
    if (!file) return null;
    var reader = new FileReader();

    reader.onload = function (e) {
      const { result } = e.target;
      if (callback) callback(result);
    }

    reader.readAsDataURL(file);
  }
}

export default ImagePicker;
