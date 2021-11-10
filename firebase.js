import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyD5Vlg_rs2FWqB-yqmYh0Que7GlWaaSRhk",
  authDomain: "customer-peipl-ac.firebaseapp.com",
  projectId: "customer-peipl-ac",
  storageBucket: "customer-peipl-ac.appspot.com",
  messagingSenderId: "914494448041",
  appId: "1:914494448041:web:0770ff52b0ddb11ebb64b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//creating and exporting db and auth
const db = getFirestore(app);
const auth = getAuth(app);
export {db, app}