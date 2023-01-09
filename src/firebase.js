import firebase from "./firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAXvp36MkbyxDm48LeuaM_MDNzkZeMtZu4",
    authDomain: "mysecondapp-587b5.firebaseapp.com",
    projectId: "mysecondapp-587b5",
    storageBucket: "mysecondapp-587b5.appspot.com",
    messagingSenderId: "853412051952",
    appId: "1:853412051952:web:898aa6aff37193716ffb35"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;