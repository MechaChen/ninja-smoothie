import firebase from "firebase";
import firestore from "firebase/firestore";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDzUvYafyOD-nONpJUF9l450tQRfhbnbio",
  authDomain: "udemy-ninja-smoothies-bba04.firebaseapp.com",
  databaseURL: "https://udemy-ninja-smoothies-bba04.firebaseio.com",
  projectId: "udemy-ninja-smoothies-bba04",
  storageBucket: "udemy-ninja-smoothies-bba04.appspot.com",
  messagingSenderId: "219122330755"
};

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore();
