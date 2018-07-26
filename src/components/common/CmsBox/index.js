import React from 'react';
import './CmsBox.css';

const CmsBox = ({ className = '', boxType = '', ...rest }) => {
  return <div className={`cms-box ${boxType} ${className}`} {...rest} />
}

export default CmsBox;
