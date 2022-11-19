import React from "react";

import './home.styles.css';
// import './navigation.styles.scss';
import Directory from '../../components/directory/directory.component';
import Master from "../../Master";
//import Header from "../../components/header/header.component";



const Home=(props)=>{

   return (
    <Master className="home">
       
       <Directory />
    </Master>
   );
    
};

export default Home;
