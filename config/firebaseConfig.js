// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-redesign.firebaseapp.com",
  projectId: "ai-redesign",
  storageBucket: "ai-redesign.firebasestorage.app",
  messagingSenderId: "579782130645",
  appId: "1:579782130645:web:dcca11276d4fdb92d49b5c",
  measurementId: "G-R0MH71WEGM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)