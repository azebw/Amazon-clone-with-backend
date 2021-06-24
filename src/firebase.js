import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmStmFM5AFekLGSu7_1_A-qs2W0cgBVbQ",
  authDomain: "backend-4810a.firebaseapp.com",
  projectId: "backend-4810a",
  storageBucket: "backend-4810a.appspot.com",
  messagingSenderId: "514353222361",
  appId: "1:514353222361:web:766df88b97eccf70e0a4c8",
  measurementId: "G-KDZS0JLN8F",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
