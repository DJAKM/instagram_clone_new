import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBga3ukUlAXuqcKZ2IRmSkhgDL1EzN3B2s",
  authDomain: "instaclone257.firebaseapp.com",
  projectId: "instaclone257",
  storageBucket: "instaclone257.appspot.com",
  messagingSenderId: "99554219929",
  appId: "1:99554219929:web:77383969d9551ab0e6e508",
  measurementId: "G-36PW3FNGQY"
};

const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app,auth,firestore,storage}
