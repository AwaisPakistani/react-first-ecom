import React from "react";
import Master from "../../Master";
import Login from "../../components/login/login.component";
import Registraion from "../../components/registration/registration.component";
import './login-register.styles.scss';
const LoginRegister=()=>(
  <Master className="login-register">
        <Login />
        <Registraion />
  </Master>
)

export default LoginRegister;