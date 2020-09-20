
import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdXfw-90zYZIuBSbVPQDZzudWNokW4VaE",
  authDomain: "travelog-b981a.firebaseapp.com",
  databaseURL: "https://travelog-b981a.firebaseio.com",
  projectId: "travelog-b981a",
  storageBucket: "travelog-b981a.appspot.com",
  messagingSenderId: "656202371147",
  appId: "1:656202371147:web:697c1153ae9ab1d25e7dce",
  measurementId: "G-LXTTTGGJQ8"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
