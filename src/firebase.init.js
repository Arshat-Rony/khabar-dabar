// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDPsX0rj9YWGbYcVHKRN9eR_xhSg3TizSU",
    authDomain: "react-khabar-dabar.firebaseapp.com",
    projectId: "react-khabar-dabar",
    storageBucket: "react-khabar-dabar.appspot.com",
    messagingSenderId: "397465931828",
    appId: "1:397465931828:web:38491967f0d7ffa3ab3a61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;