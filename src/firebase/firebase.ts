import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCYhvOFx0Ac8wV5hK-xgjZoEAympSQFxkc',
  authDomain: 'resume-2-2eebe.firebaseapp.com',
  projectId: 'resume-2-2eebe',
  storageBucket: 'resume-2-2eebe.firebasestorage.app',
  messagingSenderId: '821685049849',
  appId: '1:821685049849:web:9f52a324fc11686ef1c528',
  measurementId: 'G-4CQWHX0YF8',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
