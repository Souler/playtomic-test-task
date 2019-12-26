import 'firebase/analytics'
import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDjiIlvPlp1sSILtWGxqdsvK4tKyXOJL6Y',
  appId: '1:332307565913:web:e4d2898ac50d46d856d048',
  authDomain: 'playtomictask.firebaseapp.com',
  messagingSenderId: '332307565913',
  projectId: 'playtomictask',
  storageBucket: 'playtomictask.appspot.com',
}
firebase.initializeApp(firebaseConfig)

export default firebase
