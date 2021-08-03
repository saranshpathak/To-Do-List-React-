import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBQAgpJbtf9shGwcU21eJufqAJNCYVe2aA",
    authDomain: "to-do-list-a3a2f.firebaseapp.com",
    databaseURL: "https://to-do-list-a3a2f-default-rtdb.firebaseio.com",
    projectId: "to-do-list-a3a2f",
    storageBucket: "to-do-list-a3a2f.appspot.com",
    messagingSenderId: "518204011477",
    appId: "1:518204011477:web:e1e151a707b3b19f61435c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();