// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAofMHxLfWAP7CA05zLo6C8mL2J-NYoaow",
  authDomain: "netflixgpt-62909.firebaseapp.com",
  projectId: "netflixgpt-62909",
  storageBucket: "netflixgpt-62909.firebasestorage.app",
  messagingSenderId: "295533323176",
  appId: "1:295533323176:web:ffd73a53e24a662b0f339d",
  measurementId: "G-9QCSHSGTYJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
