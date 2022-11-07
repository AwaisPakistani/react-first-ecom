import React from "react";
import {Link} from "react-router-dom";
import './header.styles.scss';
//import {ReactComponent as Logo} from '../../logo192.png';

const Header =()=>(
    <div className="header">
        <Link className="logo-container" to="/">
           <img src='../../logo192.png'/>
        </Link>
        <div className="options">
                <Link className="option" to="/about">
                   ABOUT US
                </Link>
                <Link className="option" to="/shop">
                   SHOP
                </Link>
                <Link className="option" to="/contacts">
                   CONTACTS
                </Link>
                <Link className="option" to="/login-register">
                   LOGIN
                </Link>
        </div>
        <Link className="cart" to='/'>
          Cart
        </Link>
    </div>
)

export default Header;