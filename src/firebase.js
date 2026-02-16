import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDjgXsSK9QP8m5g3ctVrzwRo0G3Vr982es",
  authDomain: "eurocert-admin.firebaseapp.com",
  projectId: "eurocert-admin",
  storageBucket: "eurocert-admin.firebasestorage.app",
  messagingSenderId: "968491268190",
  appId: "1:968491268190:web:81453188d5298cb68bdccf",
  measurementId: "G-6PYDVX1PDE"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
