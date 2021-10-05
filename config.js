import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyCYPTCkDoh0jL4jf-LUu84tXyX14y8MSos",
  authDomain: "newsletter-98ed4.firebaseapp.com",
  databaseURL: "https://newsletter-98ed4-default-rtdb.firebaseio.com",
  projectId: "newsletter-98ed4",
  storageBucket: "newsletter-98ed4.appspot.com",
  messagingSenderId: "266303146161",
  appId: "1:266303146161:web:819fb6c18ffe1ba1563a90"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

