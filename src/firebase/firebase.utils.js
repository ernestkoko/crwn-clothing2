import {initializeApp} from 'firebase/app';
import {doc, getDoc, getFirestore, setDoc, collection}from 'firebase/firestore';
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';

//const config =

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBJzz-1tavgSrbF1W8VaaIoISdyevZpH2I",
    authDomain: "crown-db-e2d97.firebaseapp.com",
    projectId: "crown-db-e2d97",
    storageBucket: "crown-db-e2d97.appspot.com",
    messagingSenderId: "703542257380",
    appId: "1:703542257380:web:531e56b6225defbea06ef1",
    measurementId: "G-70FJZYV7TH"
})
//Initialise the App.
//const firebase =initializeApp(config);
// const app = initializeApp(config);
   // getAuth.GoogleAuthProvider()
const db = getFirestore();

export const createuserProfileDocument = async (userAuth, additionalData)=>{
    //If the userAuth does not exist or it is null, return.
    if(!userAuth) return;

    const userRef = doc(db,'users',`${userAuth.uid}`);
    
    //get the snapshot
    const snapshot = await getDoc(userRef);
    console.log(`User Ref: ${snapshot.data()}`)
   

    if(!snapshot.exists()){
        //get the name and email from the  suer auth object
        const {displayName, email} =userAuth;
        const createdAt = new Date();
        console.log("Snapshot Not exists: " + snapshot.data())
   
    try{
         await setDoc(doc(db, 'users',`${userAuth.uid}`), {
             displayName,
             email,
             createdAt,
             ...additionalData
         })

    }catch(error){
        console.log('error creating user',error.message)
         }
    }
    else{
        console.log('snapshot exists:'+snapshot)
    }

    
   return userRef;

 


}




export const auth = getAuth();
//export const firestore = firestore();

//set-up google auth
const provider = new GoogleAuthProvider(); 
//always prompt the select account
provider.setCustomParameters({});

export const signInWithGoogle =()=> signInWithPopup(auth,provider);

export default firebaseApp;