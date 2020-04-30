/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  
  return (
    
    <div className={s.item}>
      <img src='https://img0.liveinternet.ru/images/attach/c/10/111/568/111568852_0a13e68bf220d1d84a918ed8451b1b8f.jpg'/>
      {props.message}
      <div>
        <span>like</span> { props.likesCount }
      </div>  
    </div>
  );
}

export default Post;