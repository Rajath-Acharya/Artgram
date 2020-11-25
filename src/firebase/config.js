import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDzBYFp_BywSLzFfGN4z0R3vsG8ZVfOOeU",
  authDomain: "art-gram.firebaseapp.com",
  databaseURL: "https://art-gram.firebaseio.com",
  projectId: "art-gram",
  storageBucket: "art-gram.appspot.com",
  messagingSenderId: "421180876716",
  appId: "1:421180876716:web:af02e697c5e9d4876abc09",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFireStore, timestamp };
