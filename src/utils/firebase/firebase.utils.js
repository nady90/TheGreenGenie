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
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider(); // We can rename this googleProvider
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

// DATABASES
export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    // if user data doesn't exist
    // create/ set the document with the data from the userAuth in my collection
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log(error);
    }
  }

  // if user data exists
  // return userDocREf
  return userDocRef;
};

/**
 * Sign up functions
 */
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

/**
 * Sign in with email and password
 */
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

/** SIGN OUT */
export const signOutUser = async () => {
  signOut(auth);
};

/** Observer Pattern */
export const onAuthStateChangedListener = (callback) => {
  return onAuthStateChanged(auth, callback);
};

/**
 * TRANSFERRING OUR DATA COMPLETELY TO FIRESTORE INSTEAD OF RELYING ON A JSON FILE
 */
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase()); // We don't need db here because we got collectionRef from calling db
    batch.set(docRef, object);
  });

  await batch.commit();
  // console.log("DONE WITH CATEGOREIS");
};

export const getCategoriesArray = async () => {
  const collectionRef = collection(db, "new categories");

  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);

  // This will get us the data from the collection
  console.log(querySnapshot.docs.map((docSnapshot) => docSnapshot.data()));
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());

  // const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
  //   const { title, items } = docSnapshot.data();
  //   acc[title.toLowerCase()] = items;
  //   return acc;
  // }, {});

  // return categoryMap;
};
