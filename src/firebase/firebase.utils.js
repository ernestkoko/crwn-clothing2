import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';

const config ={
    apiKey: "AIzaSyBJzz-1tavgSrbF1W8VaaIoISdyevZpH2I",
    authDomain: "crown-db-e2d97.firebaseapp.com",
    projectId: "crown-db-e2d97",
    storageBucket: "crown-db-e2d97.appspot.com",
    messagingSenderId: "703542257380",
    appId: "1:703542257380:web:531e56b6225defbea06ef1",
    measurementId: "G-70FJZYV7TH"
}

//Initialise the App.
firebase.initializeApp(config);
// const app = initializeApp(config);
// getAuth.GoogleAuthProvider()


export const auth = getAuth();
export const firestore = firebase.firestore();

//set-up google auth
const provider = new GoogleAuthProvider(); 
//always prompt the select account
provider.setCustomParameters({});

export const signInWithGoogle =()=> signInWithPopup(auth,provider);

export default firebase;