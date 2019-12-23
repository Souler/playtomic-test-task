import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDjiIlvPlp1sSILtWGxqdsvK4tKyXOJL6Y",
  authDomain: "playtomictask.firebaseapp.com",
  projectId: "playtomictask",
  storageBucket: "playtomictask.appspot.com",
  messagingSenderId: "332307565913",
  appId: "1:332307565913:web:e4d2898ac50d46d856d048"
};
firebase.initializeApp(firebaseConfig);

export default firebase;
