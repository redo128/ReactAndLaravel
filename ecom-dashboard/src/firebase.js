// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjWzRK8nzzZ97xrhtqJRBguHIfbIdzI0k",
  authDomain: "nextjs-5338e.firebaseapp.com",
  projectId: "nextjs-5338e",
  storageBucket: "nextjs-5338e.appspot.com",
  messagingSenderId: "1036782650996",
  appId: "1:1036782650996:web:bbd25dafe817034772f321",
  measurementId: "G-RCGP1M8CCM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore();
export {db}; 