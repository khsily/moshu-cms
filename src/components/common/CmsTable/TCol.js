import React from 'react';

const TCol = ({ head, children, className = '', center, size, style, color = '', bold, ellipsis, ...rest }) => {
  const props = {
    className: `tcol ${center ? 'center' : ''} ${color} ${bold ? 'bold' : ''} ${ellipsis ? '' : 'multiline'} ${className}`,
    style: Object.assign({}, size ? { width: `${size}%` } : {}, style),
    children,
    ...rest,
  }

  if (head) return <th {...props} />
  else return <td {...props} />
}

export default TCol
