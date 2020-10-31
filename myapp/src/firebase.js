// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"




const firebaseConfig = {
    apiKey: "AIzaSyBUViVIk26IyVHowwm9a0FS2rI0CxcXf2A",
    authDomain: "clone-10ad0.firebaseapp.com",
    databaseURL: "https://clone-10ad0.firebaseio.com",
    projectId: "clone-10ad0",
    storageBucket: "clone-10ad0.appspot.com",
    messagingSenderId: "570237853805",
    appId: "1:570237853805:web:b3b3bb95696959edbadf64",
    measurementId: "G-GE4BY930N3"
  };
  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebase.auth();


  export {db,auth};