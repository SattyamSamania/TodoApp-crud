import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA8gTjrQmF8G8wW4prZgzlej78nePH25Rc",
    authDomain: "todoapp-f91c4.firebaseapp.com",
    databaseURL: "https://todoapp-f91c4-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "todoapp-f91c4",
    storageBucket: "todoapp-f91c4.appspot.com",
    messagingSenderId: "1038955302693",
    appId: "1:1038955302693:web:a36a214f6ef39854bb54cc"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Your web app's Firebase configuration
  const config = {
    apiKey: "AIzaSyC5u80wO6iaPl8E9auM0IRXliYGKyDQHfU",
    authDomain: "todo-b74fc.firebaseapp.com",
    projectId: "todo-b74fc",
    storageBucket: "todo-b74fc.appspot.com",
    messagingSenderId: "872116099545",
    appId: "1:872116099545:web:9bb66d12ca15f2f39521c8"
    };


export const db = getFirestore(app);