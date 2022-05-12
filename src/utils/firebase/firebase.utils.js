// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrzSc8-HU6sHyO75jHeZQTmu4aqN-KclE",
  authDomain: "my-old-clothing.firebaseapp.com",
  projectId: "my-old-clothing",
  storageBucket: "my-old-clothing.appspot.com",
  messagingSenderId: "339898563560",
  appId: "1:339898563560:web:2a4052c56ff4a270bcc25d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

const db = getFirestore(app);

export const createUserDoc = async (userAuth) => {
  const docRef = doc(db, "users", userAuth.uid);

  console.log(docRef);

  const userSnapshot = await getDoc(docRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdDate = new Date();

    try {
      await setDoc(docRef, {
        displayName,
        email,
        createdDate,
      });
    } catch (error) {
      console.log("error creating doc", error.message);
    }
  }
  return docRef;
};

export const createUserWithGoogleEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithGoogleEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  const { user } = await signInWithEmailAndPassword(auth, email, password);

  // const docRef = doc(db, "users", user.uid);
  // const docSnap = await getDoc(docRef);

  // if (docSnap.exists()) {
  //   return docSnap.data();
  // } else {
  //   console.log("No such document!");
  // }
};

export const signOutWithGoogle = async () => {
  return await signOut(auth);
};

export const addAuthStateChangeListener = (callback) => {
  onAuthStateChanged(auth, callback);
};
