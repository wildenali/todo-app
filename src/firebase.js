const { configure } = require("@testing-library/react");

import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCNvwXG7ffHXrlrAd4nvusd-d8OcZPezRg",
  authDomain: "todo-app-wilden.firebaseapp.com",
  databaseURL: "https://todo-app-wilden.firebaseio.com",
  projectId: "todo-app-wilden",
  storageBucket: "todo-app-wilden.appspot.com",
  messagingSenderId: "278087665594",
  appId: "1:278087665594:web:5dd2feed9a041e0b117f83",
  measurementId: "G-0Y25C2CTXY"
});

const db = firebaseApp.firestore();

export default db;