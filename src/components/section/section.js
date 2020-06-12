import React from 'react';
import s from './section.module.scss';

export default ({ children }) => {
  return <div className={s.wrapper}>{children}</div>;
};
