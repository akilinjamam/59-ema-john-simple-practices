// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAakEQYIKtP0RcDhEmIrgaFJSV8kgxaOmQ",
    authDomain: "ema-john-simple-fb7e2.firebaseapp.com",
    projectId: "ema-john-simple-fb7e2",
    storageBucket: "ema-john-simple-fb7e2.appspot.com",
    messagingSenderId: "454786990164",
    appId: "1:454786990164:web:83cf6162b7bd1bc78c6dc1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth