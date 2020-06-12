import React from 'react';
import s from './device.module.scss';
const { useState } = React;

export default () => {
  const [left, setSide] = useState(true);
  const clickHandler = () => {
    setSide(!left);
  };
  return (
    <div role="button" tabIndex={0} className={s.wrapper} onClick={clickHandler} onKeyDown={clickHandler}>
      <div className={`${s.device} ${left ? s.side_left : s.side_right} `}>
        <div className={`${s.triangle} ${left ? s.triangle_left : s.triangle_right}`}></div>
        <div className={s.frame}>
          <div className={s.camera}>
            <div className={s.dot}></div>
          </div>
          <div className={`${s.shine} ${s.shine_left}`}></div>
          <div className={`${s.shine} ${s.shine_right}`}></div>
          <div className={s.contents}>
            <div className={s.clock}>12:17</div>
            <div className={s.tel}></div>
            <div className={s.photo}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
