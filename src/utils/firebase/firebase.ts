import { initializeApp } from "firebase/app"
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY as string,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN as string,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID as string,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET as string,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID as string,
  appId: import.meta.env.VITE_FIREBASE_APP_ID as string,
};

const app = initializeApp(firebaseConfig)

export const _auth = getAuth(app);

export const _firestore = getFirestore(app);

export const userLogin = async (email: string, password: string) => {
  await signInWithEmailAndPassword(_auth, email, password);
};

export const createUser = async (email: string, password: string) => {
  await createUserWithEmailAndPassword(_auth, email, password)
}
