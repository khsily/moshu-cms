import React from 'react';
import { Link } from 'react-router-dom';

import { NavBar } from '../..';

import './Header.css';

const Header = ({ appName, nav }) => {
  return (
    <header>
      <div className='header-top'>
        <h1 className='header-app-name'>
          <Link to='/'>
            {appName}
          </Link>
        </h1>
        <button className='header-logout-btn'>logout</button>
      </div>
      <NavBar nav={nav} />
    </header>
  )
};

export default Header;
