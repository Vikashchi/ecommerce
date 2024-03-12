import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCalendar, faCaretDown, faBold, faCaretSquareUp, faToggleOn, faUnderline, faAlignJustify, faAlignLeft,  faClock, faImage, faUpload, faCloudUpload} from '@fortawesome/free-solid-svg-icons';
import fig3 from './images/fig3.png'
import fig4  from './images/fig4.png'





const EditProduct1= () => {
  return (
    
    <div>
             <div style={{display:"flex",padding:"50px"}}>
        <h2 style={{width:"700px"}}>Add Product Details</h2>

       
        <button style={{ marginLeft:"900px",height:"35px",width:"300px",marginTop:"10px",background:"black",color:"white"}}> Save as Draft  <FontAwesomeIcon icon={faAngleDown}/></button>
        <button style={{ marginLeft:"30px",height:"35px",width:"300px",marginTop:"10px", background:"#F58634",color:"white"}}>Save & Publish</button>
   </div>
   <div style={{border: "1px solid black", height:"550px",width:"900px",marginLeft:"50px",marginTop:"-50px"}}>
     <div style={{marginLeft:"50px"}}>
     <h3 style={{marginLeft:"20px", }}> Product Name  </h3>
    
    
     <label style={{marginLeft:"20px"}}>
              
              <input type="text" placeholder=" Samsung *Kg 5 Star Inverter Fully Autom.."  style={{marginTop:"10px", width:"350px" ,height:"30px" ,marginTop:"20px"}}/> <br />
              <input type="text" placeholder=" Washing Machine" style={{marginLeft:"20px",marginTop:"10px",width:"350px" ,height:"30px",marginTop:"30px"}} /> <FontAwesomeIcon icon={faAngleDown} style={{marginLeft:"-20px"}}/>
            </label>
            <br />
            <label style={{marginLeft:"20px" }}>
              
              <input type="text" placeholder=" &#x20B9;22,000.00" style={{marginTop:"20px",width:"165px",marginTop:"30px",height:"30px" }}   />  
              <input type="text" placeholder=" &#x20B9;18,600.00" style={{marginTop:"10px" ,marginLeft:"10px",width:"165px",marginTop:"20px",height:"30px" }} />
               <div>
               <input type="text" placeholder="265" style={{marginTop:"10px",width:"350px" ,height:"30px",marginLeft:"20px",marginTop:"30px"}} /><FontAwesomeIcon icon={faCaretSquareUp} style={{marginLeft:"-20px"}}/>
               </div>
            </label>
            <p style={{marginLeft:"20px",marginTop:"30px"}}> Discount</p>
            <p style={{marginLeft:"260px",marginTop:"-30px"}}>Add Discount   <FontAwesomeIcon icon={faToggleOn} style={{color:"#F58634"}} /></p>
            <input type="text" placeholder=" Fixed" style={{width:"165px" ,marginLeft:"20px",height:"30px"}}   />  
              <input type="text" placeholder=" 4,599.00" style={{marginLeft:"10px",width:"165px",height:"30px" }} />
              <p style={{marginLeft:"20px"}}> Expiry Date</p>
            <p style={{marginLeft:"250px",marginTop:"-30px"}}>Add Expiry Date   <FontAwesomeIcon icon={faToggleOn} style={{color:"#F58634"}}  /></p>
            <button  style={{ height:"30px",width:"370px",marginTop:"10px",marginLeft:"20px"}}> <FontAwesomeIcon icon={faCalendar}/> 12/12/2023  </button>
            </div>
            
           <div style={{border: "1px solid black", height:"130px",width:"350px",marginLeft:"500px",marginTop:"-450px"}}>
              <p style={{marginLeft:"20px",marginTop:"-3px"}}>Short Description</p>
              <p  style={{marginLeft:"20px",marginTop:"-10px", fontSize:"13px"}}>Lorem Ipsum Dolor sit amet,consectetur <br /> adipiscing elit,sed do eiusmod tempor <br />incididunt ut labore et dolore magna aliqua <br />ut enim ad minim veniam,quis noxtrud <br />execitation ullamco laboris nisi ut aliquip ex <br />
              ea Commado conseqat.Duis aute irure dol...</p>
           </div>
           <p  style={{marginLeft:"500px"}}>Product Long Description</p>
           <div style={{border: "1px solid black", height:"130px",width:"350px",marginLeft:"500px"}}>
              <button style={{width:"75px",marginLeft:"10px"}}>Roboto</button> <FontAwesomeIcon icon={faCaretDown} style={{marginLeft:"-20px"}} />
              <button style={{width:"95px",marginLeft:"10px"}}>paragraph</button> <FontAwesomeIcon icon={faCaretDown} style={{marginLeft:"-20px"}} />
              <FontAwesomeIcon icon={faBold} style={{marginLeft:"50px"}} />
              <FontAwesomeIcon icon={faUnderline} style={{marginLeft:"10px"}} />
              <FontAwesomeIcon icon={faAlignJustify} style={{marginLeft:"10px"}} />
              <FontAwesomeIcon icon={faAlignLeft} style={{marginLeft:"10px"}} />

              <p style={{marginLeft:"20px", fontSize:"13px"}}>Lorem Ipsum Dolor sit amet,consectetur <br /> adipiscing elit,sed do eiusmod tempor <br />incididunt ut labore et dolore magna aliqua <br />ut enim ad minim veniam,quis noxtrud <br />execitation ullamco laboris nisi ut aliquip ex...</p>
              


           </div>
           <p style={{marginLeft:"500px"}}> Add A long description for your product</p>
           <h3 style={{marginLeft:"500px"}}>Return P0licy</h3>
           <p style={{marginLeft:"700px",marginTop:"-40px"}}> Add Deduction   <FontAwesomeIcon icon={faToggleOn} /></p>
           <p style={{marginLeft:"500px"}}> Date Addred</p>
           <FontAwesomeIcon icon={faCalendar}   style={{marginLeft:"500px"}}/>12/12/2022
           <FontAwesomeIcon icon={faClock} style={{marginLeft:"100px"}} />12/12/2022
            
          
        </div> 
        <div style={{border: "1px solid black", height:"300px",width:"500px",marginLeft:"1000px",marginTop:"-550px"}}>
        <img src={fig3} alt="fig3"  style={{width:"300px",height:"300px",marginTop:"",marginLeft:"100px"}} />
       </div>
        <h2 style={{marginLeft:"1000px"}}>Additional Images</h2>
        <div style={{border: "1px solid black", height:"160px",width:"200px",marginLeft:"1000px",marginTop:"30px"}}>
        <img src={fig4} alt="fig4"  style={{width:"500px",height:"600px"}} />
</div>



        
        
      
    </div>
   
  );
}

export default EditProduct1;
