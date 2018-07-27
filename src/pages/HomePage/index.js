import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { SectionNav } from '../../components';

class HomePage extends Component {
  render() {
    return (
      <section id='home-page' className='container'>
        <SectionNav left='회원관리' />
        <div style={{ width: '100%', height: 350, border: '1px solid #ccc', marginBottom: 20 }} />
      </section>
    );
  }
};

export default HomePage;
