// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyCAC4rCt_2TTkDJCE9mph11N8eb_jh3Cvc",
  authDomain: "teamreporter-3ef33.firebaseapp.com",
  projectId: "teamreporter-3ef33",
  storageBucket: "teamreporter-3ef33.appspot.com",
  messagingSenderId: "133530818993",
  appId: "1:133530818993:web:1272ce01fe5331370c0590",
  measurementId: "G-X9BLZ60J98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);