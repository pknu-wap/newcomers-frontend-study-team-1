import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzHti4cEJGSZ04INM-nBvu7nf9AhTYSG8",
  authDomain: "nwitter-reloaded-c56da.firebaseapp.com",
  projectId: "nwitter-reloaded-c56da",
  storageBucket: "nwitter-reloaded-c56da.firebasestorage.app",
  messagingSenderId: "129975551921",
  appId: "1:129975551921:web:b8e7daa3ce1d641eb91f90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);