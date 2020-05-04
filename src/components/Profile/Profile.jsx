/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import Profileinfo from './Profileinfo/Profileinfo';

const Profile = (props) => {

 

  return (
    <div>
      <Profileinfo />
      <MyPosts posts={ props.state.posts } addPost={props.addPost} />
    </div>
  );
}

export default Profile;