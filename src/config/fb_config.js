import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

// Fetching data from the Realtime Database
const dbRef = ref(db, '6400_board');
onValue(dbRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data); // Check the data returned from Firebase
});
