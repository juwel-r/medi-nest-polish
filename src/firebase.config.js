import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;



// VITE_apiKey=AIzaSyCnjOCjytYj8C0db3YvqBDmbRubl7iuJ18
// VITE_authDomain=juwel-rana-portfolio.firebaseapp.com
// VITE_projectId=juwel-rana-portfolio
// VITE_storageBucket=juwel-rana-portfolio.firebasestorage.app
// VITE_messagingSenderId=389201243144
// VITE_appId=1:389201243144:web:055b2c466f2941172fb5bd
// VITE_measurementId=G-ESHK33FFW