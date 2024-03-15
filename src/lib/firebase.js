// import { cookies } from 'next/headers';
import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getAuth, signOut, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

import FIREBASE_CONFIGURATION from '../../firebase.json';

const firebaseConfig = FIREBASE_CONFIGURATION;

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);

export const prospectsCollection = collection(db, "prospects");

let userLoaded = false;
export function getCurrentUser() {
  return new Promise((resolve, reject) => {
     if (userLoaded) {
          resolve(auth.currentUser);
     }
     const unsubscribe = onAuthStateChanged(auth, (user) => {
        userLoaded = true;
        unsubscribe();
        resolve(user);
     }, reject);
  });
}

export const canAccess = async () => {
    return Boolean(await getCurrentUser());
}

export { signInWithEmailAndPassword, signOut };