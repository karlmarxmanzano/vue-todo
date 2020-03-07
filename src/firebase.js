import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyA4xciSFEJ3ZDL3pB-6s0XegakrH1OlIO8",
    authDomain: "vuejs-http-tutorial-b983c.firebaseapp.com",
    databaseURL: "https://vuejs-http-tutorial-b983c.firebaseio.com",
    projectId: "vuejs-http-tutorial-b983c",
    storageBucket: "vuejs-http-tutorial-b983c.appspot.com",
    messagingSenderId: "484885463852",
    appId: "1:484885463852:web:50bfc3f1b082bbbe046289",
    measurementId: "G-79S4332BWX"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// db.settings({
//     timestampsInSnapshots: true
// })

export default db