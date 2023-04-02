// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwp_82XPjB5BmF4R3qXKaPaPzIHbP_fIg",
  authDomain: "chrea-7c7cf.firebaseapp.com",
  projectId: "chrea-7c7cf",
  storageBucket: "chrea-7c7cf.appspot.com",
  messagingSenderId: "565923004521",
  appId: "1:565923004521:web:138e18df644697a6a922f8",
  measurementId: "G-KGKTHM1ZLT"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
