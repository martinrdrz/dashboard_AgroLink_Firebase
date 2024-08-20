// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// https://firebase.google.com/docs/web/setup#available-libraries

// The web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyA1Qr7LA4J0vxP6tyPxslOu7IoBnOuJw9w',
    authDomain: 'agrolink-ecddb.firebaseapp.com',
    databaseURL: 'https://agrolink-ecddb-default-rtdb.firebaseio.com',
    projectId: 'agrolink-ecddb',
    storageBucket: 'agrolink-ecddb.appspot.com',
    messagingSenderId: '1028325193658',
    appId: '1:1028325193658:web:e1b3aa433e083695328f83',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
