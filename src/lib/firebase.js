import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

import FIREBASE_CONFIGURATION from '../../firebase.json';

const firebaseConfig = FIREBASE_CONFIGURATION;

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);

export const db = getFirestore(app);

export const prospectsCollection = collection(db, "prospects");