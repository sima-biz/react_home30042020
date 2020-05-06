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
      ]

    }
    // sidebar: {}
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('State changed');
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer
  }
}

export default store;
window.store = store;


/////////////
// let rerenderEntireTree = () => {
//   console.log('State changed');
// }


// let state = {
//   profilePage: {
//     posts: [
//       { id: 1, message: 'Hi, how are you?', likesCount: 12 },
//       { id: 2, message: 'It\'s my first post', likesCount: 23 },
//       { id: 3, message: 'Blabla', likesCount: 11 },
//       { id: 3, message: 'Dada', likesCount: 11 }
//     ],
//     newPostText: 'it-kamasutra.com'
//   },
//   dialogsPage: {
//     dialogs: [
//       { id: 1, name: 'Dimych' },
//       { id: 2, name: 'Andrey' },
//       { id: 3, name: 'Sveta' },
//       { id: 4, name: 'Sasha' },
//       { id: 5, name: 'Victor' },
//       { id: 6, name: 'Valera' }
//     ],
//     messages: [
//       { id: 1, message: 'Hi' },
//       { id: 2, message: 'How is your it-kamasutra' },
//       { id: 3, message: 'Yo' },
//       { id: 4, message: 'Yo' },
//       { id: 5, message: 'Yo' }
//     ]
    
//   } 
//   // sidebar: {}
// }



// export const addPost = () => {
//   let newPost = {
//     id: 5,
//     message: state.profilePage.newPostText,
//     likesCount: 0
//   };
//   state.profilePage.posts.push(newPost);
//   state.profilePage.newPostText = '';
//   rerenderEntireTree(state);
// }

// export const updateNewPostText = (newText) => {
//   state.profilePage.newPostText = newText;
//   rerenderEntireTree(state);
// }

// export const subscribe = (observer) => {
//   rerenderEntireTree = observer
// }



// export default state;
// window.state = state;

///////////////////////////////////////////////////////