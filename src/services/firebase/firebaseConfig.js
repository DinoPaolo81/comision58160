import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCRTKj1C1tceU2Xg0Un872UxGk4jVlNwGg",
  authDomain: "ecommercedinomenichini.firebaseapp.com",
  projectId: "ecommercedinomenichini",
  storageBucket: "ecommercedinomenichini.appspot.com",
  messagingSenderId: "149444938151",
  appId: "1:149444938151:web:60b7e4b2ab9ffbf03c8e82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)