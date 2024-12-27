import { initializeApp } from 'firebase/app'
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYF7jJSGkpaOCHT6I1206Ye8kojuN9lTk",
  authDomain: "pixvertfun.firebaseapp.com",
  databaseURL: "https://pixvertfun-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pixvertfun",
  storageBucket: "pixvertfun.firebasestorage.app",
  messagingSenderId: "828927840529",
  appId: "1:828927840529:web:b55459b0e4f225a9043cb0",
  measurementId: "G-8FB9QJ9STW"
};

const realtime = getDatabase(firebaseApp);
export const auth = getAuth(firebaseApp);
export default realtime;

