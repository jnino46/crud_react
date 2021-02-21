import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAZnERSeyOHJHI65GXRZ08sCwexm_cm6cY",
    authDomain: "crud-61db9.firebaseapp.com",
    projectId: "crud-61db9",
    storageBucket: "crud-61db9.appspot.com",
    messagingSenderId: "49312798799",
    appId: "1:49312798799:web:49475e5302d6f58fb9f23a"
  
};

export const firebaseApp = firebase.initializeApp(firebaseConfig)