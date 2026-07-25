// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "vingo-food-delivery-cefcf.firebaseapp.com",
  projectId: "vingo-food-delivery-cefcf",
  storageBucket: "vingo-food-delivery-cefcf.firebasestorage.app",
  messagingSenderId: "562618577425",
  appId: "1:562618577425:web:4bb0a0fcfe58787147b7b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export {app,auth}