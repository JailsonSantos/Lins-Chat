import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDisZy53fP9sL4ItwZgE7QWIj6NHwHOd8s",
  authDomain: "clone-discord-reactjs.firebaseapp.com",
  projectId: "clone-discord-reactjs",
  storageBucket: "clone-discord-reactjs.appspot.com",
  messagingSenderId: "234906468647",
  appId: "1:234906468647:web:91bc11d985a2a5409aa902",
  measurementId: "G-V4R8X6CHHZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;