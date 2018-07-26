import React from 'react';
import { CmsButton } from '../..';

import './RadioGroup.css';

const RadioGroup = ({ values = [], activeValue, onChange }) => {
  return (
    <div className='radio-group'>
      {values.map((v, i) => (
        <CmsButton
          className={`radio-group__radio ${activeValue === v ? 'active' : ''}`}
          key={`radio_${i}`}
          btnType='mid'
          onClick={() => onChange(v, i)}>{v}</CmsButton>
      ))}
    </div>
  )
}

export default RadioGroup
