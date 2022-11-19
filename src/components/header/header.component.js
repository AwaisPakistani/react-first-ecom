import React from "react";
import {Link} from "react-router-dom";
import './header.styles.scss';
import { auth } from "../../firebase/firebase.utils";
import { signOut } from "firebase/auth";
//import {ReactComponent as Logo} from '../../logo192.png';
const handleSignout=async({currentUser})=>{
   // try{
   //    await signOut(auth);
   // }catch(error){
   //    console.log(error);
   // }
   //console.log(currentUser);
   localStorage.clear();
};
const Header =({ currentUser })=>(
    <div className="header">
        <Link className="logo-container" to="/">
           <img src='../../logo192.png'/>
        </Link>
        <div className="options">
                <Link className="option" to="/about">
                   ABOUT US{currentUser}
                </Link>
                <Link className="option" to="/shop">
                   SHOP
                </Link>
                <Link className="option" to="/contacts">
                   CONTACTS
                </Link>
                
                
                {
                  localStorage.getItem('name') ?
                  (<button className="option" onClick={handleSignout}>
                     LOGOUT
                  </button>):(
                <Link className="option" to="/login-register">
                   LOGIN
                </Link>)
                }
               
                <Link className="option" to='/'>
                  <img src='../../cart1.jpg'/>
               </Link>
               
        </div>
        
        <div className="profilePic" >
            <img src={localStorage.getItem('profilePic')}/> 
            {localStorage.getItem('name')}
        </div>
        
       
    </div>
);




export default Header;