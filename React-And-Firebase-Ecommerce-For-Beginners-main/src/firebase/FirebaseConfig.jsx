// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJ3qm13XAwAiN-fvChQjdtIH8EskIMhL8",
    authDomain: "keshav-sweets.firebaseapp.com",
    projectId: "keshav-sweets",
    storageBucket: "keshav-sweets.appspot.com",
    messagingSenderId: "727417259102",
    appId: "1:727417259102:web:609e5df6235f87c0d8a0cf",
    measurementId: "G-1VYGK7EXYR"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }