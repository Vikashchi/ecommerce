import React from 'react';
import { Link } from 'react-router-dom';

const Router = () => {
  return (
    <div>
     
      <nav>
        <ul>
      
          <li><Link to="/Customer">  Customer</Link></li>
          
          <li><Link to="/Details">  Details</Link></li>
        
         
        </ul>
      </nav>
    </div>
  );
}

export default Router;
