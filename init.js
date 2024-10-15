// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBB_Hz3a01riO3KE4fJ4z6BMS9XkBLr10s",
  authDomain: "plan2study-samvithlabs.firebaseapp.com",
  projectId: "plan2study-samvithlabs",
  storageBucket: "plan2study-samvithlabs.appspot.com",
  messagingSenderId: "314998674774",
  appId: "1:314998674774:web:70ee8f819737e2ff9572f7",
  measurementId: "G-W81BL7PLX3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);