import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD6Hc6HCc5-hXrnKypad39QG-WUJI2WY8c",
  authDomain: "amzon-clone.firebaseapp.com",
  databaseURL: "https://amzon-clone.firebaseio.com",
  projectId: "amzon-clone",
  storageBucket: "amzon-clone.appspot.com",
  messagingSenderId: "662143984685",
  appId: "1:662143984685:web:f7ce88fc6ec7099fcc44a4",
  measurementId: "G-N59NRRVTTX",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
