import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQX2Mdu3bgnoe0J6Wndp0dgdQOgs-gw_g",
  authDomain: "e-commerce-with-react-23bec.firebaseapp.com",
  projectId: "e-commerce-with-react-23bec",
  storageBucket: "e-commerce-with-react-23bec.appspot.com",
  messagingSenderId: "246865542615",
  appId: "1:246865542615:web:74ee52d2b4ad700e3c1f92",
  measurementId: "G-FCN0WX4SSW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
