import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './BreadCrumbMenu.css';

const BreadCrumbMenu = ({ list = [] }) => {
  return (
    <div className='bread-crumb-menu'>
      {list.map((v, i) => (
        <CrumbMenu
          key={`crumb_menu_${i}`}
          title={v.title}
          to={v.to}
          active={list.length - 1 === i} />
      ))}
    </div>
  )
}

export default BreadCrumbMenu;

const CrumbMenu = ({ title, to, active }) => {
  const children = (
    <Fragment>
      <span>{title}</span>
      {!active && <span className='crumb-menu-arrow'>{'>'}</span>}
    </Fragment>
  );

  if (to) {
    return (
      <Link to={to} className={`crumb-menu ${active ? 'active' : ''}`}>
        {children}
      </Link>
    );
  } else {
    return (
      <a className={`crumb-menu ${active ? 'active' : ''}`}>
        {children}
      </a>
    );
  }
}