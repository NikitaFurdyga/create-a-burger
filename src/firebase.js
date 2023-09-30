
// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZP0_5us-KmyNA8mSzKhKBWdiwJnKqzxs",
  authDomain: "my-project-8e0a5.firebaseapp.com",
  projectId: "my-project-8e0a5",
  storageBucket: "my-project-8e0a5.appspot.com",
  messagingSenderId: "328642609820",
  appId: "1:328642609820:web:ee45c9923f18b32a8e2359"
};

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)

export default firebase