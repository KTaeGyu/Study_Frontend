import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGad5vr4oBjclLQCWabN3sYok0QUrsYk8",
  authDomain: "nwitter-reloaded-babc4.firebaseapp.com",
  projectId: "nwitter-reloaded-babc4",
  storageBucket: "nwitter-reloaded-babc4.appspot.com",
  messagingSenderId: "195759622583",
  appId: "1:195759622583:web:69f93aa79c597470ed0032",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
