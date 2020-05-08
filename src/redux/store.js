import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
// const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: 'It\'s my first post', likesCount: 23 },
        { id: 3, message: 'Blabla', likesCount: 11 },
        { id: 3, message: 'Dada', likesCount: 11 }
      ],
      newPostText: 'it-kamasutra.com'
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Victor' },
        { id: 6, name: 'Valera' }
      ],
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your it-kamasutra' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' }
      ],
      newMessageBody: ""
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log('State changed');
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },


  dispatch(action) { // { type: 'ADD-POST'}

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state); 

   
  } 
}


// export const addPostActionCreator = () => ({ type: ADD_POST });
// export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

// export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
// export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default store;
window.store = store;

