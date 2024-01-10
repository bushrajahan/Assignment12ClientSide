// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBm34-F2kDkmdHfsRQRVA735PnsU3XKghY",
  authDomain: "silicon-topic-400517.firebaseapp.com",
  projectId: "silicon-topic-400517",
  storageBucket: "silicon-topic-400517.appspot.com",
  messagingSenderId: "839948761543",
  appId: "1:839948761543:web:c84d31ba4d0be3867a81e2",
  measurementId: "G-253V3Y1GRN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth  = getAuth();
export default app;