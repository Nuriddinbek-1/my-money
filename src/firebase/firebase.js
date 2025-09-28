import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAq_uDUHgijgAh7YVrj4achvdpk3makyyw",
  authDomain: "mymoney-b0f6c.firebaseapp.com",
  projectId: "mymoney-b0f6c",
  storageBucket: "mymoney-b0f6c.firebasestorage.app",
  messagingSenderId: "684257561133",
  appId: "1:684257561133:web:fa4b7338780119b54706a4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Database
export const db = getFirestore(app);

// Authentification
export const auth = getAuth();
