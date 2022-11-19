import { initializeApp } from '@firebase/app';
import {getFirestore} from 'firebase/firestore';
import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
onAuthStateChanged,
getAuth,
GoogleAuthProvider,
signInWithPopup}
from 'firebase/auth';

const config={
    apiKey: "AIzaSyAyQvr1cnE0q1yhWuBu5wAEmSYvrmWC7Bg",
    authDomain: "react-ecomdb.firebaseapp.com",
    projectId: "react-ecomdb",
    storageBucket: "react-ecomdb.appspot.com",
    messagingSenderId: "883264852624",
    appId: "1:883264852624:web:222d5ac98f4f164a913e15",
    measurementId: "G-PNQC6LVRHT"
  };
// const firestore=firebase.firebase();
// export const createUserProfileDocument=async(userAuth,additionalData)=>{
//     if(!userAuth) return;
//     console.log(firestore.doc('/users/jdfj98df'))
// }

const  firebase=initializeApp(config);

const auth=getAuth(firebase);

const db=getFirestore(firebase);

export {
    auth,
    db,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
};

export const provider= new GoogleAuthProvider();
 
export const signInWithGoogle=()=>{
    signInWithPopup(auth,provider).then((result)=>{
        const name=result.user.displayName;
        const email=result.user.email;
        const profilePic=result.user.photoURL;
        // consts
       
        //storeage

        localStorage.setItem("name",name)
        localStorage.setItem("email",email)
        localStorage.setItem("profilePic",profilePic)
    }).catch(error=>console.log(error))
};


