import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBMya61hv80au1O5CGDliO4tWLX8s0QiVk",
  authDomain: "clone-e5042.firebaseapp.com",
  databaseURL: "https://clone-e5042.firebaseio.com",
  projectId: "clone-e5042",
  storageBucket: "clone-e5042.appspot.com",
  messagingSenderId: "566881313975",
  appId: "1:566881313975:web:9500df7eaf804a101b5932",
  measurementId: "G-PS2LEDTW0H"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };