// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0v5faGWGW-qeoBYbQHdd11ym4taL0bpE",
  authDomain: "netflix-gpt-8298b.firebaseapp.com",
  projectId: "netflix-gpt-8298b",
  storageBucket: "netflix-gpt-8298b.firebasestorage.app",
  messagingSenderId: "393595266992",
  appId: "1:393595266992:web:7bcde204f03f6ed0a45875",
  measurementId: "G-29SFL0WD04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
