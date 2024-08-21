// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnTCStKGRSr_1kbjnQfUzcPaA2EQ4jRzc",
  authDomain: "agrimart-8123e.firebaseapp.com",
  projectId: "agrimart-8123e",
  storageBucket: "agrimart-8123e.appspot.com",
  messagingSenderId: "865885824381",
  appId: "1:865885824381:web:b90739f98daf238d92d814",
  measurementId: "G-TEBFG123C1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);