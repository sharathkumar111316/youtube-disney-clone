import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDmAxmwoOu6uAqqSRA9t8UNFvqgy-9ifEM",
    authDomain: "disney-clone-4220e.firebaseapp.com",
    projectId: "disney-clone-4220e",
    storageBucket: "disney-clone-4220e.appspot.com",
    messagingSenderId: "422933790271",
    appId: "1:422933790271:web:2b0374f9d9b7cf623ac28a"
  };

  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;