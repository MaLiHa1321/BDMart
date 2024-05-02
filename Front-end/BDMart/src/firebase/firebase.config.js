// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmXK26534y5dO3a4Uwf_4yLxErkG3ztHk",
  authDomain: "bdmart-27609.firebaseapp.com",
  projectId: "bdmart-27609",
  storageBucket: "bdmart-27609.appspot.com",
  messagingSenderId: "231494758149",
  appId: "1:231494758149:web:6ab06dbc9738520b01116c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;