import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyDlF3gjb7Br-QASMpMYIorVeQa_8KO0EwA",
  authDomain: "cicristraeletronicro.firebaseapp.com",
  projectId: "cicristraeletronicro",
  storageBucket: "cicristraeletronicro.appspot.com",
  messagingSenderId: "219274012880",
  appId: "1:219274012880:web:5bcc4ddf3544d2df0096d5"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
