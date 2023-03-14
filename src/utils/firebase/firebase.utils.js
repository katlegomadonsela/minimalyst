// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMymFeCAlZqc7oNQmE1HALP1kq6EjAuWY",
  authDomain: "minimalyst-33051.firebaseapp.com",
  projectId: "minimalyst-33051",
  storageBucket: "minimalyst-33051.appspot.com",
  messagingSenderId: "316329111005",
  appId: "1:316329111005:web:12af997b3c77a378f45a34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Authorisation
const auth = getAuth(app);

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
}
  