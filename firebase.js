import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLrGXSg3rBH-t8JYq4Izz3kFT0tOKk7Yc",
  authDomain: "learnings-69420.firebaseapp.com",
  projectId: "learnings-69420",
  storageBucket: "learnings-69420.appspot.com",
  messagingSenderId: "564848924081",
  appId: "1:564848924081:web:3afb7497be18ea001f9990",
  measurementId: "G-F1FDXTM8H4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
