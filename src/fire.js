// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB4GBEZ_dhGVQ-aqFcbzZ3jXJ1F5R8OvCg",
  authDomain: "fir-learning-3e0c9.firebaseapp.com",
  projectId: "fir-learning-3e0c9",
  storageBucket: "fir-learning-3e0c9.appspot.com",
  messagingSenderId: "439645794798",
  appId: "1:439645794798:web:7a011467dd7ea97b239eff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
