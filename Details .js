import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faShoppingCart, faClock, faMapMarkerAlt, faUser, faShoppingBag,faSearch,faFilter,faCalendar,faCopy,faShare} from '@fortawesome/free-solid-svg-icons';
import { IoFilterOutline } from "react-icons/io5";


const Details = () => {
    
  return (
    <div>
        <div style={{display:"flex",padding:"50px"}}>
        <p>Customer  ID #CZ1235  </p> 
        <p style={{ marginLeft:"30px"}}>Customer Since 01-jan-2023 -03-21 pm  </p>
        <button style={{ marginLeft:"140px",height:"35px",width:"200px",marginTop:"10px", color:"#F58634", borderColor:"#F58634"}} >Send Recovery Email</button>
        <button  style={{ marginLeft:"30px",height:"35px",marginTop:"10px",color:"#F58634", borderColor:"#F58634"}}>Reset Password</button>
        <button style={{ marginLeft:"30px",height:"35px",width:"200px",marginTop:"10px",background:"#F58634",color:"white"}}>Edit Customer |  <FontAwesomeIcon icon={faAngleDown}/></button>
        <button style={{ marginLeft:"30px",height:"35px",width:"200px",marginTop:"10px", background:"#a03d51",color:"white"}}>Suspend Customer</button>
        

        </div> 
        <div>
        <card style={{display:"flex",marginTop:"-20px"}} >
                        <div>
                        <div style={{border: "1px solid #ccc", width: "340px", height: "150px",marginLeft:"50px",marginTop:"20px" }}>
                            
                        <FontAwesomeIcon icon={faUser} style={{color:"F58634"}}   />                          <button style={{marginLeft:"230px",marginTop:"-20px", color:"green"}}>Active</button><span ><p style={{marginLeft:"20px",marginTop:"-25px"}}>Sravan Kumar</p>

                        <p style={{marginLeft:"20px",marginTop:"-10px"}}>Last Order 12 sept 2023</p> 
                        {/* <button style={{marginLeft:"230px"}}>Active</button> */}
                        </span>

                    <div style={{display:"flex"}}>
                     <span style={{ fontSize:"15px"}}><p>Phone</p>
                    
                     <p style={{fontSize:"18px"}}>+918888888888</p>


                     </span>
                     <span style={{marginLeft:"30px",fontSize:"15px"}}><p>Email</p>
                    
                     <p style={{fontSize:"18px"}}>ionsravan@gmail.com</p>
                    
                    </span>
                  
                    </div>
                    
                    
                    




                                        
                    </div>
                    </div>
                    
                    <div>
                    <div style={{border: "1px solid #ccc", width: "330px", height: "150px",marginLeft:"30px",marginTop:"20px" }}>
                            
                        <FontAwesomeIcon icon={faMapMarkerAlt}  style={{color:"F58634"}}  />                        

                        

                    <div style={{display:"flex"}}>
                     <span style={{marginTop:"20px",fontSize:"15px"}}><p>Home Address</p>
                    
                     <p style={{fontSize:"18px"}}>1-2,34,RamNagar,Visakhapatnam, < br />Andhra Pradesh 530016</p>


                     </span>
                    
                    </div>
                    
                    
                    




                                        
                    </div>
                    </div>
                        <div>
                        <div style={{border: "1px solid #ccc", width: "330px", height: "150px",marginLeft:"30px",marginTop:"20px" }}>
                            
                        <FontAwesomeIcon icon={faClock}   style={{color:"F58634"}}  />                          <p style={{marginLeft:"250px",marginTop:"-20px"}}>All-time</p>


                        <div style={{display:"flex"}}>
                     <span style={{ marginTop:"20px",fontSize:"15px"}}><p>Total Orders</p>
                    
                     <p style={{fontSize:"20px"}}>&#x20B9;3,36,499.00</p>


                     </span>                  
                    </div>
                    
                    
                    




                                        
                    </div>
                    </div>
                    
                    <div>
                    <div style={{border: "1px solid #ccc", width: "330px", height: "150px",marginLeft:"30px",marginTop:"20px" }}>
                            
                        <FontAwesomeIcon icon={faShoppingCart}  style={{color:"F58634"}}  />                        

                        

                    <div style={{display:"flex"}}>
                     <span ><p style={{color:"F58634",marginTop:"60px"}}>   Abandoned Cart</p>
                    
                     <p style={{fontSize:"20px"}}>2</p>


                     </span>
                    
                    </div>
                    
                    




                                        
                    </div>
                    </div>



                    
                    </card>
                    <card >
                        <div>
                        <div style={{border: "1px solid #ccc", width: "700px", height: "150px",marginLeft:"50px",marginTop:"20px" }}>
                    <FontAwesomeIcon icon={faShoppingBag}  style={{marginLeft:"20px",color: "F58634"}}/>
                    <span style={{marginLeft:"550px"}}> All-time</span>          <FontAwesomeIcon icon={faAngleDown}/>
                    <div style={{display:"flex"}}>
                     <span style={{marginLeft:"30px",marginTop:"30px",fontSize:"15px"}}><p>All Orders</p>
                    
                     <p style={{fontSize:"30px",marginTop:"-10px"}}>10</p>


                     </span>
                     <span style={{marginLeft:"100px",marginTop:"30px",fontSize:"15px"}}><p >Pending</p>
                    
                     <p style={{fontSize:"30px",marginTop:"-10px"}}>2</p>

                    
                    </span>
                    <span style={{marginLeft:"100px" ,marginTop:"30px",fontSize:"15px"}}><p>Completed</p>
                    
                    <p style={{fontSize:"30px",marginTop:"-10px"}}>8</p>

                    
                    </span>
                    </div>
                    




                    <div style={{border: "1px solid #ccc", width: "700px", height: "150px",marginLeft:"720px" ,marginTop:"-160px" }}>
                    <FontAwesomeIcon icon={faShoppingBag}  style={{marginLeft:"20px" ,color:"F58634"}}/>
                    <span style={{marginLeft:"550px"}}> All-time</span>              <FontAwesomeIcon icon={faAngleDown}/>
                    <div style={{display:"flex"}}>
                     <span style={{marginLeft:"30px",marginTop:"30px",fontSize:"15px"}}><p>Canceled</p>
                    
                     <p style={{fontSize:"30px",marginTop:"-10px"}}>0</p>

                     </span>
                     <span style={{marginLeft:"100px",marginTop:"30px",fontSize:"15px"}}><p >Returned</p>
                    
                     <p style={{fontSize:"30px",marginTop:"-10px"}}>0</p>

                    
                    </span>
                    <span style={{marginLeft:"100px",marginTop:"30px",fontSize:"15px"}}><p>Damaged</p>
                    
                    <p style={{fontSize:"30px",marginTop:"-10px"}}>0 </p>

                    
                    </span>
                    </div>
                    </div>
                    </div>
                    </div>
                    
                    </card>


        </div>
        <h2 style={{marginLeft:"50PX"}}>Sravan's Orders</h2>
                    <div style={{marginLeft:"300px",marginTop:"-35px"}}>
                    <input 
                    type="text" 
                    placeholder="Search" style={{marginLeft:"800PX",width:"200px",height:"40px"}}/>
                               < FontAwesomeIcon icon={faSearch} style={{marginLeft:"-20px"}} />
                               <button style={{ height:"40px",marginLeft:"20px"}}> <FontAwesomeIcon icon={faFilter} /> Filter</button>
                               <button style={{ height:"40px",marginLeft:"20px"}}> <FontAwesomeIcon icon={faCalendar} /> Filter</button>
                              

                    </div>
                    <table >
                    <thead >
            <tr >
            <th style={{paddingLeft:"40px"}} ><input type="checkbox" /></th>
              <th  style={{ paddingLeft: "10px", textAlign: "left"}} > Order Date   <IoFilterOutline />    </th >
              <th style={{paddingLeft:"180px"}}>Order Type  <IoFilterOutline />  </th>
              <th style={{paddingLeft:"180px"}} >Tracking  <IoFilterOutline />  </th>
              <th style={{paddingLeft:"180px"}}>Orders Total  <IoFilterOutline />  </th>
              <th style={{paddingLeft:"180px"}}>Status <IoFilterOutline />  </th>
             
            </tr>
          </thead>
          <tbody   >
            <tr  >
              <td  style={{paddingLeft:"40px"}}><input type="checkbox" /></td>
              <td   style={{paddingLeft:"10px",paddingBottom:"15px" }}>12 Sep 2023 - 01:33pm</td>
              <td style={{paddingLeft:"180px"   }} >Home Delivery </td>
              
              <td style={{paddingLeft:"180px"   }}>96adf2154 <FontAwesomeIcon icon={faCopy} /></td>
              <td style={{paddingLeft:"180px"   }}> &#x20B9; 46,999.00</td>
              <td style={{ paddingLeft:"180px"  }}> completed</td>
             

            </tr>
            <tr  >
              <td  style={{paddingLeft:"40px"}}><input type="checkbox" /></td>
              <td   style={{paddingLeft:"10px",paddingBottom:"15px" }}>12 Sep 2023 - 01:33pm</td>
              <td style={{paddingLeft:"180px"   }} >Home Delivery </td>
              
              <td style={{paddingLeft:"180px"   }}>96adf2154 <FontAwesomeIcon icon={faCopy} /></td>
              <td style={{paddingLeft:"180px"   }}> &#x20B9; 46,999.00</td>
              <td style={{ paddingLeft:"180px"  }}> in-progress </td>
             

            </tr>
            <tr  >
              <td  style={{paddingLeft:"40px"}}><input type="checkbox" /></td>
              <td   style={{paddingLeft:"10px",paddingBottom:"15px" }}>12 Sep 2023 - 01:33pm</td>
              <td style={{paddingLeft:"180px"   }} >pick Up </td>
              
              <td style={{paddingLeft:"180px"   }}>96adf2154 <FontAwesomeIcon icon={faCopy} /></td>
              <td style={{paddingLeft:"180px"   }}> &#x20B9; 46,999.00</td>
              <td style={{ paddingLeft:"180px"  }}> pending</td>
             

            </tr>
            {/* Add more rows as needed */}
          </tbody>
                    </table>
                  
    </div>
  );
}

export default Details;
