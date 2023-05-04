// Import the functions needed from the SDKs
import firebase from "firebase/app";
import "firebase/auth";
// TODO: Added SDKs for Firebase products to be used
// https://firebase.google.com/docs/web/setup#available-libraries

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCevofHP9qYdK2m4kjP1Qb-U9K0wlc_umM",
  authDomain: "spiassess.firebaseapp.com",
  projectId: "spiassess",
  storageBucket: "spiassess.appspot.com",
  messagingSenderId: "994249544848",
  appId: "1:994249544848:web:777f34dac818afb05b7415",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
