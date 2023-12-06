// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6CUGDn5LXCRnNoUPvMa3KR_Ew1R6xpyE",
  authDomain: "myfirstfirebase-cf19b.firebaseapp.com",
  projectId: "myfirstfirebase-cf19b",
  storageBucket: "myfirstfirebase-cf19b.appspot.com",
  messagingSenderId: "987550140768",
  appId: "1:987550140768:web:596d1f93ff0fe6b109b605"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);