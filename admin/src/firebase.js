import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.APP_KEY,
  authDomain: "netflix-bbcb7.firebaseapp.com",
  projectId: "netflix-bbcb7",
  storageBucket: "netflix-bbcb7.appspot.com",
  messagingSenderId: "144538214167",
  appId: "1:144538214167:web:fe9c6b477e1ed80134a152",
  measurementId: "G-WK6HK9H1E8"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
