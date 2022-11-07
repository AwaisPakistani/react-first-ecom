import React from "react";
import './login.styles.scss';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }
    handleSubmit=event=>{
        event.preventDefault();
        this.setState({email:'',password:''})
    }
    handleChange=event=>{
        const {value,name}=event.target;
        this.setState({[name]:value})
    }
    render(){
        return(
            <div className="login">
               <h2>I already have an account</h2>
               <span>Login with your email and password</span>
               <form onSubmit={this.handleSubmit}>
                 <input
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required/>
                 <label>Email</label>
                 <input
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  required/>
                 <label>Password</label>

                 <input type="submit" value="Submit" />
               </form>
            </div>
        )
    }
}

export default Login;