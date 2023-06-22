import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC30K5fJlbcdbPAKaughVLKryzH0H3iETs",
  authDomain: "decentralized-file-stora-281ed.firebaseapp.com",
  projectId: "decentralized-file-stora-281ed",
  storageBucket: "decentralized-file-stora-281ed.appspot.com",
  messagingSenderId: "431185293193",
  appId: "1:431185293193:web:dde14c3af55c40b6947b58"
};


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const firestore = app.firestore();

export  const database = {

  folders:firestore.collection("folders"),
  files:firestore.collection("files"),
  formattedDoc:doc => {

      return {

           id: doc.id,
           ...doc.data()
      }
  },
  favourites:firestore.collection("favourites"),
  getCurrentTimeStamp:firebase.firestore.FieldValue.serverTimestamp
}


export const auth = firebase.auth(app);
export default app;
