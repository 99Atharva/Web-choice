import firebase from "firebase";


const firebaseApp = firebase.initializeApp(
  {
    apiKey: "AIzaSyB1eok-mfLnxrRYcoJJ2yC8JxvLQ2LUmQk",
    authDomain: "webchoice-backend.firebaseapp.com",
    projectId: "webchoice-backend",
    storageBucket: "webchoice-backend.appspot.com",
    messagingSenderId: "710505958643",
    appId: "1:710505958643:web:2addc526c2c8886634bb86"
  });


  

   const auth = firebase.auth();
   const provider = new firebase.auth.GoogleAuthProvider();
   const db = firebaseApp.firestore();
   const storage = firebase.storage();
   

   export default db;
   export{auth , provider,db , storage}
