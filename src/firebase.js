import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAT8QoODfsCVQJyDZmSyJstY6HDML6RGks',
  authDomain: 'react-chat-efed2.firebaseapp.com',
  projectId: 'react-chat-efed2',
  storageBucket: 'react-chat-efed2.appspot.com',
  messagingSenderId: '923922195835',
  appId: '1:923922195835:web:51d9a8533dd8f57701c9de',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();
const storage = getStorage(app);

const provider = new GoogleAuthProvider();
export { auth, provider, db, storage };
