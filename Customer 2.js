import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes ,faToggleOn ,faAngleDown, faToggleOff} from '@fortawesome/free-solid-svg-icons';







function Customer() {
  return (
    
    <div style={{border: "1px solid black", height:"500px",width:"350px",marginLeft:"550px",marginTop:"150px"}}>
     
 <h3 style={{marginLeft:"20px", }}> Add a New Customer  <FontAwesomeIcon icon={faTimes}  style={{marginLeft:"70px"}}/></h3>

 <p style={{marginLeft:"20px"}}>Customer Information</p>
 <label style={{marginLeft:"20px"}}>
          
          <input type="text" placeholder=" customer Name"  style={{marginTop:"10px", width:"270px" ,height:"20px"}}/> <br />
          <input type="text" placeholder=" customer Email" style={{marginLeft:"20px",marginTop:"10px",width:"270px" ,height:"20px"}} />
        </label>
        <br />
        <label style={{marginLeft:"20px" }}>
          
          <input type="text" placeholder=" +91" style={{marginTop:"20px",width:"50px" }}   />   <FontAwesomeIcon icon={faAngleDown} style={{marginLeft:"-20px"}}/>
          <input type="text" placeholder=" 0000000000" style={{marginTop:"10px" ,marginLeft:"10px",width:"200px" }} />
          
        </label>
        <p style={{marginLeft:"20px"}}>Add Address     <FontAwesomeIcon icon={faToggleOn} style={{color:"#F58634"}} /></p>
        <label style={{marginLeft:"20px"}}>
          
          <input type="text" placeholder=" Building No,Street Address "  style={{marginTop:"10px", width:"270px" ,height:"20px"}}/> <br />
          <input type="text" placeholder=" Landmark" style={{marginLeft:"20px",marginTop:"10px",width:"270px" ,height:"20px"}} />
        </label>
        <br />
        <label style={{marginLeft:"20px" }}>
          
          <input type="text" placeholder=" State" style={{marginTop:"20px",width:"135px" }}   />   <FontAwesomeIcon icon={faAngleDown} style={{marginLeft:"-20px"}}/>
          <input type="text" placeholder=" City" style={{marginTop:"10px" ,marginLeft:"10px",width:"125px" }} /> <FontAwesomeIcon icon={faAngleDown} style={{marginLeft:"-20px"}} />
          
        </label>
        <p style={{fontSize:"13px",marginLeft:"20px"}}> Billing Address  Same as Customer Address    <FontAwesomeIcon icon={faToggleOff}  /></p>
        <button style={{marginLeft:"20px", color:"#F58634", borderColor:"#F58634",width:"135px" ,height:"40px"}}>Cancle</button> 
        <button style={{background:"#F58634",color:"white", marginLeft:"10px" ,width:"135px",height:"40px"}}>Add</button>
        
      
    </div>
   
  );
}

export default Customer;
