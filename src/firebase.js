import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBfH6qFMmWzPD2CNFGFacEEZhoX8X5rJSQ",
  authDomain: "clone-8c149.firebaseapp.com",
  databaseURL: "https://clone-8c149.firebaseio.com",
  projectId: "clone-8c149",
  storageBucket: "clone-8c149.appspot.com",
  messagingSenderId: "464849784032",
  appId: "1:464849784032:web:445aaec3d07159455b1485"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
