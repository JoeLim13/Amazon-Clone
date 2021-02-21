// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAVIVXFHJeYhPV5uAiL81xgnVQDuz1bcng",
    authDomain: "clone-16a0f.firebaseapp.com",
    projectId: "clone-16a0f",
    storageBucket: "clone-16a0f.appspot.com",
    messagingSenderId: "48515613013",
    appId: "1:48515613013:web:5053be092059521b766fdc",
    measurementId: "G-SSHYWEJ97H"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db , auth };