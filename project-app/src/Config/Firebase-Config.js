// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPjTfn-9GdJWvDygnlsDheGqSylVpC-u0",
  authDomain: "project-app-f078c.firebaseapp.com",
  projectId: "project-app-f078c",
  storageBucket: "project-app-f078c.appspot.com",
  messagingSenderId: "551155388619",
  appId: "1:551155388619:web:5fff2ea8438f7cfc2acb4e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
