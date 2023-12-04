// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCajUlZCy_qlVNYB810Ctwxbd8qnOuE_SE",
  authDomain: "assignment12-18374.firebaseapp.com",
  projectId: "assignment12-18374",
  storageBucket: "assignment12-18374.appspot.com",
  messagingSenderId: "399061436125",
  appId: "1:399061436125:web:e5eb4562cd3e582c7efd34",
  measurementId: "G-PR4JBSX5D9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth  = getAuth();
export default app;