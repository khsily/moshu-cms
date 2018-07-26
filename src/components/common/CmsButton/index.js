import React from 'react';

import './CmsButton.css';

const CmsButton = ({ className = '', btnType = '', ...rest }) => {
  return <button className={`cms-button ${btnType} ${className}`} {...rest} />
}

export default CmsButton;
