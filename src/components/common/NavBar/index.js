import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.css';

const NavBar = ({ nav = [] }) => {
  return (
    <ul className='navbar'>
      {nav.map((v, i) => (
        <li key={`navbar_list_${i}`} className='navbar-list'>
          <NavLink to={v.to} activeClassName='active' exact={v.exact}>
            {v.title}
          </NavLink>
        </li>
      ))}
    </ul>
  )
};

export default NavBar;
