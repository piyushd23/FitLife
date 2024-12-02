import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAU3poAV0RRAKyE6NsI66ZfioUCexjQewo",
  authDomain: "fitlife-hub-b07f6.firebaseapp.com",
  projectId: "fitlife-hub-b07f6",
  storageBucket: "fitlife-hub-b07f6.firebasestorage.app",
  messagingSenderId: "522295039766",
  appId: "1:522295039766:web:8eec0375f96c24c8886237",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);