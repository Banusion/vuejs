import firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyA6tqUwJAdnCiv3_lxb8wIwjrY',
  authDomain: 'cropchat-637ef.firebaseapp.com',
  databaseURL: 'https://cropchat-637ef.firebaseio.com',
  projectId: 'cropchat-637ef',
  storageBucket: 'cropchat-637ef.appspot.com',
  messagingSenderId: '42350741386'
}
firebase.initializeApp(config)

export default {
  database: firebase.database()
}
