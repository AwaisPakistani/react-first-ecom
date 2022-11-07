import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/header.component";
const Contacts=()=>(
    <div>
      <Header />
      <h1>
        Contacts Page with component
  
      </h1>
      <Link to="/"><button>Back to Home</button></Link>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );

export default Contacts;