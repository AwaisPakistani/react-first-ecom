import React from "react";
import './login-register.styles.scss';
import Header from "../../components/header/header.component";
import Login from "../../components/login/login.component";
const LoginRegister=()=>(
  <div className="login-register">
    <Header/>
    <div className="content">
        <Login />
    </div> 
  </div>
)

export default LoginRegister;