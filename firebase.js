import firebase from 'firebase'
import 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyDJvVjsIZVoWut-qGf71e2IhZWGxgOi5K8",
    authDomain: "facebook-clone-70ab5.firebaseapp.com",
    projectId: "facebook-clone-70ab5",
    storageBucket: "facebook-clone-70ab5.appspot.com",
    messagingSenderId: "384722985225",
    appId: "1:384722985225:web:ad0a68575e486f6125f3d8"
};


const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = app.firestore();
const storage = firebase.storage();

export { db, storage }