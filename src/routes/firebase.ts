import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-sOxhhkuViKVNkOeKbeb1c59OvwVJLVE",
  authDomain: "dwitter-reloaded.firebaseapp.com",
  projectId: "dwitter-reloaded",
  storageBucket: "dwitter-reloaded.firebasestorage.app",
  messagingSenderId: "788794119434",
  appId: "1:788794119434:web:1325fe3ed1702b22e016f3",
  measurementId: "G-3SNNP12Q7F"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);