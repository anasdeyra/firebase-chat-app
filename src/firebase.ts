// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD94U4CwitepzSZ-O46N8ECLxcNm4gl5QQ",
  authDomain: "synthetic-hall-330419.firebaseapp.com",
  projectId: "synthetic-hall-330419",
  storageBucket: "synthetic-hall-330419.appspot.com",
  messagingSenderId: "606283939761",
  appId: "1:606283939761:web:490bdc22369f4e8b720790",
  measurementId: "G-TDXG5WFT6Y",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
