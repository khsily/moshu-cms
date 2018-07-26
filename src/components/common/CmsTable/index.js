import React from 'react';

import TCol from './TCol';

import './CmsTable.css';

const CmsTable = ({ children, ...rest }) => {
  return (
    <table className='cms-table' {...rest}>
      {children}
    </table>
  )
}

export default CmsTable;
export { TCol };