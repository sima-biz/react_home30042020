/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import s from './Profileinfo.module.css';

const Profileinfo = () => {
  return (
    <div>
      <div>
        <img src='https://img0.liveinternet.ru/images/attach/b/3//42/12/42012029_19_03_2009_0385321001237457339_alexander_jansson.jpg' />
      </div>
      <div className={s.descriptionBlock}>
        ava+ description
      </div>
    </div>
  );
}

export default Profileinfo;