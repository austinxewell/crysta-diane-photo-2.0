// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAynFkqeoe9Urk3JpOEkpL83uE-lYvzF3E',
  authDomain: 'crystas-website-v2.firebaseapp.com',
  projectId: 'crystas-website-v2',
  storageBucket: 'crystas-website-v2.appspot.com',
  messagingSenderId: '649754266757',
  appId: '1:649754266757:web:70f9f1bb23a242c7672dec'
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(firebaseApp);
