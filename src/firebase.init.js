// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCr6F_Dp0dG_6HFRcwE8CivlXUG4PX3rG0",
    authDomain: "e-env-1eb6a.firebaseapp.com",
    projectId: "e-env-1eb6a",
    storageBucket: "e-env-1eb6a.appspot.com",
    messagingSenderId: "909025104237",
    appId: "1:909025104237:web:7cb4bdfd08a62ce3200a64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;