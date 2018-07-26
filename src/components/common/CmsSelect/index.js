import React from 'react';
import Select from 'react-select';

import './CmsSelect.css';

const CmsSelect = ({ className = '', selectType = '', ...rest }) => {
  return (
    <Select
      className={`cms-select ${className} ${selectType}`}
      classNamePrefix='cms-select'
      {...rest} />
  )
}

export default CmsSelect;
