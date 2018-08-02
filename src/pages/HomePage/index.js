import React, { Component } from 'react';

import { SectionNav, UserStatistics } from '../../components';

class HomePage extends Component {
  render() {
    return (
      <section id='home-page' className='container'>
        <SectionNav left='회원관리' />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <UserStatistics />
          <div style={{ width: 420, height: 300, background: '#EFEFEF' }} />
          <div style={{ width: 420, height: 300, background: '#EFEFEF' }} />
        </div>
      </section>
    );
  }
};

export default HomePage;
