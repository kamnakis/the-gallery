import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDF0EFBNuiAYc2_e53342j43xaoZEPFlPU",
  authDomain: "instagram-clone-538cb.firebaseapp.com",
  databaseURL: "https://instagram-clone-538cb.firebaseio.com",
  projectId: "instagram-clone-538cb",
  storageBucket: "instagram-clone-538cb.appspot.com",
  messagingSenderId: "999207305754",
  appId: "1:999207305754:web:b03ca766338fe85d8f07a3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectStorage, projectFirestore, timestamp }