// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyC0bKcO2zQZk-zQFTSBOkSxdXypLgGnM5o",
    authDomain: "teacher-tube.firebaseapp.com",
    projectId: "teacher-tube",
    storageBucket: "teacher-tube.appspot.com",
    messagingSenderId: "605134679085",
    appId: "1:605134679085:web:5c4e4d7ed0f67d7a7e1ca4",
    measurementId: "G-0YG2ZZ7GVV"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore()
const auth = getAuth()
const storage = getStorage()

export { db, auth, storage, analytics }