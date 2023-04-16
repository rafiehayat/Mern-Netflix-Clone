import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCW6AzuxsSlCcQzpHzKK4hP95DnoL102DA",
  authDomain: "authentication-aae31.firebaseapp.com",
  projectId: "authentication-aae31",
  storageBucket: "authentication-aae31.appspot.com",
  messagingSenderId: "402597887870",
  appId: "1:402597887870:web:faab58ee9023322ad93d2f",
  measurementId: "G-JVV3QELZ42",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
