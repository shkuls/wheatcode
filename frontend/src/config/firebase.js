// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSWJ224i9Ko75WaB9MRJXHyaq9dEh7S9M",
  authDomain: "leetcode-clone-62db8.firebaseapp.com",
  projectId: "leetcode-clone-62db8",
  storageBucket: "leetcode-clone-62db8.appspot.com",
  messagingSenderId: "568258221618",
  appId: "1:568258221618:web:9a344d4a592357eebb0e2b",
  measurementId: "G-291723JMXT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const analytics = getAnalytics(app);