// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnwm4ssgyOXZLeAOzkLdu325kSzolTdFg",
  authDomain: "netflixgpt-73e03.firebaseapp.com",
  projectId: "netflixgpt-73e03",
  storageBucket: "netflixgpt-73e03.firebasestorage.app",
  messagingSenderId: "732370697819",
  appId: "1:732370697819:web:878c30d401486f518a897e",
  measurementId: "G-315BDTE7B3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);