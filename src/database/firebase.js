import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA_JY1vmNQN59z_L5Pt6aJImJEMFbGrOLQ",
  authDomain: "database-calfit.firebaseapp.com",
  projectId: "database-calfit",
  storageBucket: "database-calfit.appspot.com",
  messagingSenderId: "676045566562",
  appId: "1:676045566562:web:009c6bbd86c4cdf988173b",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const database = getFirestore();
