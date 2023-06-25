// Import the functions you need from the SDKs you need
const initializeApp = require('firebase/app').initializeApp
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAa1jRzJOzevT6OX7Lba60PDrvap1xIdRQ",
  authDomain: "bookstore-images.firebaseapp.com",
  projectId: "bookstore-images",
  storageBucket: "bookstore-images.appspot.com",
  messagingSenderId: "684661708754",
  appId: "1:684661708754:web:c158587f5da005a3a15a0b"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

module.exports = firebase