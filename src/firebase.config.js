// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnjOCjytYj8C0db3YvqBDmbRubl7iuJ18",
  authDomain: "juwel-rana-portfolio.firebaseapp.com",
  projectId: "juwel-rana-portfolio",
  storageBucket: "juwel-rana-portfolio.firebasestorage.app",
  messagingSenderId: "389201243144",
  appId: "1:389201243144:web:055b2c466f2941172fb5bd",
  measurementId: "G-ESHK33FFWC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
export default auth