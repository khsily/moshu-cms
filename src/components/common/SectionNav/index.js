import React from 'react';
import { CmsBox } from '../..';

import './SectionNav.css';

const SectionNav = ({ left, right }) => {
  return (
    <CmsBox className='section-nav'>
      <div className='section-nav-left'>
        {renderChild(left)}
      </div>
      <div className='section-nav-right'>
        {renderChild(right)}
      </div>
    </CmsBox>
  );

  function renderChild(child) {
    if (typeof child === 'string') {
      return <h2 className='section-nav-title'>{child}</h2>;
    } else {
      return child;
    }
  }
}

export default SectionNav;
