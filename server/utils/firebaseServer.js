import { initializeApp, getApps } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAynFkqeoe9Urk3JpOEkpL83uE-lYvzF3E',
  authDomain: 'crystas-website-v2.firebaseapp.com',
  projectId: 'crystas-website-v2',
  storageBucket: 'crystas-website-v2.appspot.com',
  messagingSenderId: '649754266757',
  appId: '1:649754266757:web:70f9f1bb23a242c7672dec'
};

export default function useFirebase() {
  console.log('FIREBASE SERVER FILE');
  if (getApps().length == 0) {
    console.log('inside if');
    initializeApp(firebaseConfig);
  }
}
