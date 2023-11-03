import {initializeApp} from  "firebase/app";
import {getFirestore} from "firebase/firestore";
import 'firebase/auth'
import 'firebase/compat/firestore';
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyB5VavS_sFQcJFGPO3UB5wKVSBBWbvThz8",
  authDomain: "olxclone-89f99.firebaseapp.com",
  projectId: "olxclone-89f99",
  storageBucket: "olxclone-89f99.appspot.com",
  messagingSenderId: "113059531195",
  appId: "1:113059531195:web:d34f463ff448118cc3dc9e",
  measurementId: "G-9CKZLN95R7"
  };


  export const Firebaseapp =initializeApp(firebaseConfig)
  export const storage =getStorage(Firebaseapp)
  export const db =getFirestore(Firebaseapp)