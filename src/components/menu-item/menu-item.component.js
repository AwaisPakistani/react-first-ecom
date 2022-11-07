import React from "react";
import './menu-item.styles.scss';
import {Link} from 'react-router-dom';
const MenuItem=( {title , imageUrl, size, linkUrl} )=>(
  
  
    <div
     className={`${size} menu-item`} >
      <div
      className="background-image"
      style={{
        backgroundImage:`url(${imageUrl})`,
      }}
        
      /> 
      
    <div className="content">
        <h1 className="title">
            {title.toUpperCase()} 
            
        </h1>
        <Link to={linkUrl}>
        <span className="subtitle">
            Shop Now
        </span>
        </Link>
        

    </div>
  
  </div>
 
);
export default MenuItem;