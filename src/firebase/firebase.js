import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDEKA2aeTZsJNMswFRKNIy24vok7iIwzzs",
  authDomain: "lmi-ping-pong.firebaseapp.com",
  databaseURL: "https://lmi-ping-pong.firebaseio.com",
  projectId: "lmi-ping-pong",
  storageBucket: "lmi-ping-pong.appspot.com",
  messagingSenderId: "1019186904297"
};

!(firebase.apps.length) && firebase.initializeApp(config);

const auth = firebase.auth();

export {
  auth,
};