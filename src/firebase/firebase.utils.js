import { initializeApp } from '@firebase/app';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';

const config={
    apiKey: "AIzaSyAyQvr1cnE0q1yhWuBu5wAEmSYvrmWC7Bg",
    authDomain: "react-ecomdb.firebaseapp.com",
    projectId: "react-ecomdb",
    storageBucket: "react-ecomdb.appspot.com",
    messagingSenderId: "883264852624",
    appId: "1:883264852624:web:222d5ac98f4f164a913e15",
    measurementId: "G-PNQC6LVRHT"
  };

const  fire=initializeApp(config);
export const auth=getAuth(fire);
export const provider= new GoogleAuthProvider();
 
export const signInWithGoogle=()=>{
    signInWithPopup(auth,provider).then((result)=>{
        console.log(result)
    }).catch(error=>console.log(error))
};

