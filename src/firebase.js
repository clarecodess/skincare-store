import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB6YDrM6kMcSHjtMixqS1pVVA9L-tZ0hbA",
    authDomain: "skincare-store-5d090.firebaseapp.com",
    projectId: "skincare-store-5d090",
    storageBucket: "skincare-store-5d090.appspot.com",
    messagingSenderId: "215382483955",
    appId: "1:215382483955:web:d895412d6de4fdfcabe886",
    measurementId: "G-DZT7N32SL8"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
export default {db, app};