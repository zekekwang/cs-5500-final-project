import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, remove, serverTimestamp, Database } from 'firebase/database';


const firebaseConfig = {
    authDomain: "cs5500-coffeebrewing.firebaseapp.com",
    databaseURL:"https://cs5500-coffeebrewing-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "cs5500-coffeebrewing",
    storageBucket: "cs5500-coffeebrewing.appspot.com",
    messagingSenderId: "725820413767",
    appId: "1:725820413767:web:77a8d56852c086fb129e62"
  };
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);

export { db, firebaseApp, ref, set, remove, serverTimestamp };
