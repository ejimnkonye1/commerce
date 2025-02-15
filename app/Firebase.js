import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getDatabase } from 'firebase/database';
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
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
const database = getDatabase(app);

export { auth, firestore, storage, database };