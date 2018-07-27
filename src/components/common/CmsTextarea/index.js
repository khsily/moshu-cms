import React from 'react';

import './CmsTextarea.css';

const CmsTextarea = ({ className = '', ...rest }) => {
  return (
    <textarea className={`cms-textarea ${className}`} {...rest} />
  );
}

export default CmsTextarea;
