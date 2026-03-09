import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDTCAmwR1ldaWIAXPGV_qaXIF68ngmYHDI",
  authDomain: "nwitter-reloaded-65551.firebaseapp.com",
  projectId: "nwitter-reloaded-65551",
  storageBucket: "nwitter-reloaded-65551.appspot.com",
  messagingSenderId: "82112681440",
  appId: "1:82112681440:web:8c81dcf868bad6e16ec785"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);