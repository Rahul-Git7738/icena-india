// Import the necessary Firebase modules
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcTJY3QOwu8z65dhfUH97xKRRsFH0HGTQ",
  authDomain: "iena-597b2.firebaseapp.com",
  projectId: "iena-597b2",
  storageBucket: "iena-597b2.appspot.com",
  messagingSenderId: "648808412237",
  appId: "1:648808412237:web:9d6ac59a3304d5154a9804",
  measurementId: "G-NBZX76DHE9",
};

// Initialize Firebase if it's not already initialized

firebase.initializeApp(firebaseConfig);

// Export Firebase services
export const storage = firebase.storage();
export const firestore = firebase.firestore();
