import React from 'react'
import { CmsBox } from '../..';

import './CategoryListGroup.css';

const CategoryListGroup = ({ title, list = [], activeValue, renderList, onChange, hideHeader }) => {
  return (
    <ul className='category-list-group'>
      {!hideHeader &&
        <li className='category-list-header'>
          <CmsBox className='category-list-group__title'>{title}</CmsBox>
        </li>
      }
      {list.map((v, i) => (
        <li
          key={`category_${title}_${i}`}
          className={`category-list ${activeValue === v.text ? 'active' : ''}`}
          onClick={() => handleCLick(v, i)}>
          {renderListComponent(v, i)}
        </li>
      ))}
    </ul>
  );

  function renderListComponent(data, index) {
    if (renderList) return renderList(data, index);
    else return data.text;
  }

  function handleCLick(data, index) {
    if (onChange) onChange(data, index);
  }
}

export default CategoryListGroup;
