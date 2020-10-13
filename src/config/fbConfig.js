import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
// Your web app's Firebase configuration
var config = {
  apiKey: "AIzaSyCJLadIUjWuHATcwYudZme2OoZR3cqZHT8",
  authDomain: "marioplan-9d40a.firebaseapp.com",
  databaseURL: "https://marioplan-9d40a.firebaseio.com",
  projectId: "marioplan-9d40a",
  storageBucket: "marioplan-9d40a.appspot.com",
  messagingSenderId: "565235679400",
  appId: "1:565235679400:web:e525886e60ea0ca915029d"
};

firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;