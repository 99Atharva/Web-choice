import firebase from "firebase/app";
import "firebase/auth";


var firebaseConfig = {
    apiKey: "AIzaSyD-mAeYvwYvRlrfXJuGXkND0Kh8BISkVrM",
    authDomain: "fir-test-56764.firebaseapp.com",
    projectId: "fir-test-56764",
    storageBucket: "fir-test-56764.appspot.com",
    messagingSenderId: "681584047410",
    appId: "1:681584047410:web:e58ab219d405655955932b"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const provider = new firebase.auth.GoogleAuthProvider();