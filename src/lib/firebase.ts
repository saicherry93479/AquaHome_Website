
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA49IAjiAEaewtar8p6Wr3TGdzWW9firAo",
  authDomain: "aquahome-e26c0.firebaseapp.com",
  projectId: "aquahome-e26c0",
  storageBucket: "aquahome-e26c0.firebasestorage.app",
  messagingSenderId: "1047972418589",
  appId: "1:1047972418589:web:c54b490fb12de76bd262f4",
  measurementId: "G-S1Y9FYZQE5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { db, storage, auth };
export default app;
