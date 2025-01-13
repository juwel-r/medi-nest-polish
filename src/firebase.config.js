// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;



// VITE_apiKey=AIzaSyAp-TqZ-8tf2s8Amlj0dIfHuLZmVTmvAUU
// VITE_authDomain=edu-mate-24f55.firebaseapp.com
// VITE_projectId=edu-mate-24f55
// VITE_storageBucket=edu-mate-24f55.firebasestorage.app
// VITE_messagingSenderId=713598788959
// VITE_appId=1:713598788959:web:f813ea96f7e39c7f1202e