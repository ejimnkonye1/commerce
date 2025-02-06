// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJiPDqUiZ15ZBNHLYGX8cmJO2Ez0Y31r8",
  authDomain: "e-commerce-fa429.firebaseapp.com",
  projectId: "e-commerce-fa429",
  storageBucket: "e-commerce-fa429.appspot.com",
  messagingSenderId: "169354055004",
  appId: "1:169354055004:web:91e0308f8af2d0be730599",
  measurementId: "G-9DXBJ532FC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;