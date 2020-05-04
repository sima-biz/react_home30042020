/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import Profileinfo from './Profileinfo/Profileinfo';

const Profile = (props) => {

  // let posts = [
  //   { id: 1, message: 'Hi, how are you?', likesCount: 12 },
  //   { id: 2, message: 'It\'s my first post', likesCount: 23 },
  //   { id: 3, message: 'Blabla', likesCount: 11 },
  //   { id: 3, message: 'Dada', likesCount: 11 }
  // ]

  return (
    <div>
      <Profileinfo />
      <MyPosts posts={ props.state.posts } />
    </div>
  );
}

export default Profile;