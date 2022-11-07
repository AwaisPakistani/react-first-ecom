import React from "react";

import './home.styles.css';
// import './navigation.styles.scss';
import Directory from '../../components/directory/directory.component';
import Header from "../../components/header/header.component";



const Home=(props)=>{

   return (
    <div className="home">
      <Header/>
       <Directory />
    </div>
   );
    
};

export default Home;
