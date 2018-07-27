import React from 'react';

import './CmsRow.css';

const CmsRow = ({ title, children, className = '', ...rest }) => {
  return (
    <div className={`cms-row ${className}`} {...rest}>
      <h4 className='cms-row__title'>{title}</h4>
      <div className='cms-row__content'>
        {children}
      </div>
    </div>
  );
}

export default CmsRow;
