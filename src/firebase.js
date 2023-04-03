// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsT7z5yxX8H-S69e5BK_qYwOrDm2C4pCE",
  authDomain: "itube-9dc88.firebaseapp.com",
  projectId: "itube-9dc88",
  storageBucket: "itube-9dc88.appspot.com",
  messagingSenderId: "706672519406",
  appId: "1:706672519406:web:6e00dc7fda5973b5a92bff",
  measurementId: "G-ZWJZTQXR9X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);