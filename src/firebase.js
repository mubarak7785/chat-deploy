import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7IXdZv2Mhtd_JvhW-H8-EHKvX_QrZwBA",
  authDomain: "chat-app-f5a1c.firebaseapp.com",
  projectId: "chat-app-f5a1c",
  storageBucket: "chat-app-f5a1c.appspot.com",
  messagingSenderId: "217860176939",
  appId: "1:217860176939:web:a1d63285de8aef38027e6e",
  measurementId: "G-2LSQPDZ5NG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
