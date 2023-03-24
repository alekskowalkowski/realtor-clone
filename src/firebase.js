// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "realtor-clone-5c262.firebaseapp.com",
  projectId: "realtor-clone-5c262",
  storageBucket: "realtor-clone-5c262.appspot.com",
  messagingSenderId: "40989450840",
  appId: "1:40989450840:web:f52e4b828568b0ccc8202d",
  measurementId: "G-KTBL5NRSRE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
const analytics = getAnalytics(app);
