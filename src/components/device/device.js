import React, { useState  } from 'react';
import s from './device.module.scss';

export default props => {

  let left = props.side;
  let screen = props.screen;

  return (
    <div className={`${s.wrapper} ${left ? s.left : s.right}`}>
      <div className={`${s.device} ${left ? s.side_right : s.side_left}`}>
        <div className={s.shine}></div>
        <div className={s.frame}>
          <div className={s.camera}>
            <div className={s.dot}></div>
          </div>
          <div className={`${s.curve} ${s.curve_left}`}></div>
          <div className={`${s.curve} ${s.curve_right}`}></div>
          <div className={`${s.contents} ${screen ? s.hide : s.show}`}>
            <h3>12:03</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
