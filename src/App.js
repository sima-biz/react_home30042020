
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from "react-router-dom";

const App = (props) => {

  // let posts = [
  //   { id: 1, message: 'Hi, how are you?', likesCount: 12 },
  //   { id: 2, message: 'It\'s my first post', likesCount: 23 },
  //   { id: 3, message: 'Blabla', likesCount: 11 },
  //   { id: 3, message: 'Dada', likesCount: 11 }
  // ]

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>

          {/* <Route path='/dialogs' 
                 render={ () => <Dialogs 
                     dialogs={props.state.dialogsPage.dialogs} 
                   messages={props.state.dialogsPage.messages} /> } />
          <Route path='/profile' 
                 render={ () => <Profile 
                   posts={props.state.profilePage.posts} /> } /> */}

          <Route path='/dialogs'
            render={() => <Dialogs state={props.state.dialogsPage} /> } />
          <Route path='/profile'
            render={() => <Profile state={props.state.profilePage} /> } />

          
        </div>
      </div>
    </BrowserRouter> 
  );
}

export default App;
