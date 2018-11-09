import React from 'react';

import './CmsPopup.css';

const CmsPopup = ({ open, title, children, onClose }) => {
  return (
    <div className={`cms-popup overlay ${open ? 'open' : ''}`}>
      <div className='cms-popup__body'>
        <button
          className='cms-popup__close'
          onClick={onClose}>
          <span></span>
          <span></span>
        </button>
        <div className='cms-popup__header'>
          <h1 className='cms-popup__title'>{title}</h1>
        </div>
        <div className='cms-popup__content'>
          {children}
        </div>
      </div>
    </div>
  );
}

export default CmsPopup;
