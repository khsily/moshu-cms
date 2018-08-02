import React from 'react';

import './UserStatistics.css';

const UserStatistics = ({ data }) => {
  return (
    <div className='user-statistics'>
      <div className='user-statistics__wrapper top'>
        <UserStatRow title='오늘 가입 회원 객수' value='11명' />
        <UserStatRow title='어제 가입 회원 객수' value='11명' />
        <UserStatRow title='이달 총 가입자수' value='11명' />
        <UserStatRow title='전달 총 가입자수' value='11명' />
      </div>
      <div className='divider' />
      <div className='user-statistics__wrapper bottom'>
        <UserStatRow title='총 가입자수' value='11명' />
      </div>
    </div>
  );
}

export default UserStatistics;

const UserStatRow = ({ title, value }) => {
  return (
    <div className='user-stat-row'>
      <span className='user-stat-row__title'>{title}</span>
      <span className='user-stat-row__value'>{value}</span>
    </div>
  )
}
