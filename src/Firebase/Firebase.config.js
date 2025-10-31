// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiKJgvogByCBs0uGpwOiuUfV4xv8sII4Q",
  authDomain: "smart-deals-db624.firebaseapp.com",
  projectId: "smart-deals-db624",
  storageBucket: "smart-deals-db624.firebasestorage.app",
  messagingSenderId: "798173276875",
  appId: "1:798173276875:web:37cfbdb87050374a0ac94e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
