// import { initializeApp } from "firebase/app";

// import { getAuth } from "firebase/auth";
// import { getDatabase } from "firebase/database";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyD42IxYd_po7S-qPSlsOX1xQzy5goz6nag",
//   authDomain: "make-myhouse.firebaseapp.com",
//   projectId: "make-myhouse",
//   storageBucket: "make-myhouse.appspot.com",
//   messagingSenderId: "1048874164178",
//   appId: "1:1048874164178:web:5bd74f6c550e8b38b5320b",
// };

// //initialize firebase instance
// let firebase = initializeApp(firebaseConfig);
// export let auth = getAuth(firebase);
// export let database = getDatabase(firebase);
// export let storage = getStorage(firebase);









// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyD7TotS37sKQNueS7W_aQRlEx3vBun1Miw",
  authDomain: "student-e8d08.firebaseapp.com",
  projectId: "student-e8d08",
  storageBucket: "student-e8d08.appspot.com",
  messagingSenderId: "931043236677",
  appId: "1:931043236677:web:9f0911698556007d02fc2c"

};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
let firebase = initializeApp(firebaseConfig);
export let auth = getAuth(firebase);
export let database = getDatabase(firebase);
export let storage = getStorage(firebase);