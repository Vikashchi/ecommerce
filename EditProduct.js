import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faShoppingCart, faClock, faMapMarkerAlt, faUser, faShoppingBag,faSearch,faFilter,faCalendar,faCopy,faShare, faEye} from '@fortawesome/free-solid-svg-icons';
import { IoFilterOutline } from "react-icons/io5";
import fig2 from './images/fig2.png'




const EditProduct= () => {
    return (
<div>
<div style={{display:"flex", marginTop:"50px",marginLeft:"50px"}}>
        <p >SAMSUNG  8Kg 5 Star Inverter Fully...  </p> 
        <p style={{marginLeft:"30px"}} >Date Added 12 sept 2023 - 01:24 Pm</p>
        <p   style={{marginLeft:"30px"}}>Product URL CoolZone.in/samsung-fu..  <FontAwesomeIcon icon={faCopy}/></p>  

        <button style={{ height:"35px",width:"200px",marginTop:"10px",background:"black",color:"white",marginLeft:"100px"}}>Edit Customer |  <FontAwesomeIcon icon={faAngleDown}/></button>
        <button style={{ height:"35px",width:"200px",marginTop:"10px", background:"#a03d51",color:"white",marginLeft:"50px"}}>Suspend Customer</button>
        

        </div> 
        <div>
        <card style={{display:"flex",marginTop:"-20px"}} >
                        <div>
                        <div style={{border: "1px solid #ccc", width: "270px", height: "150px",marginLeft:"50px",marginTop:"20px" }}>
                        <img src={fig2} alt="fig2"  style={{width:"150px",height:"150px",marginTop:"",marginLeft:"30px"}} />
                       </div>
                    </div>
                    
                    <div>
                    <div style={{border: "1px solid #ccc", width: "330px", height: "150px",marginLeft:"50px",marginTop:"20px" }}>
                          <div>
                          <button style={{marginLeft:"250px",marginTop:"-20px", color:"green"}}>published</button><span ><p style={{marginLeft:"20px",marginTop:"-25px"}}>Last Order 12 Sept 2023</p></span>
                        </div>
                        

                    <div style={{display:"flex"}}>
                     <span style={{marginTop:"20px",fontSize:"15px",marginLeft:"20px"}}><p>Price</p>
                    
                     <p style={{fontSize:"20px", marginLeft:"10px"}}>&#x20B9;22,000.00</p>


                     </span>
                     <span style={{marginTop:"20px",fontSize:"15px",marginLeft:"120px"}}><p>In-stock</p>
                    
                    <p style={{fontSize:"20px", marginLeft:"10px"}}>20</p>


                    </span>
                   
                    
                    </div>
                    
                    
                    




                                        
                    </div>
                    </div>
                        <div>
                        <div style={{border: "1px solid #ccc", width: "330px", height: "150px",marginLeft:"50px",marginTop:"20px" }}>
                            
                        <FontAwesomeIcon icon={faClock}   style={{color:"F58634"}}  />                          <p style={{marginLeft:"250px",marginTop:"-20px"}}>All-time</p>


                        <div style={{display:"flex"}}>
                     <span style={{ marginTop:"20px",fontSize:"15px",marginLeft:"20px"}}><p>Total Orders</p>
                    
                     <p style={{fontSize:"20px"}}>&#x20B9;22,65,000.00</p>


                     </span>                  
                    </div>
                    
                    
                    




                                        
                    </div>
                    </div>
                    
                    <div>
                    <div style={{border: "1px solid #ccc", width: "330px", height: "150px",marginLeft:"50px",marginTop:"20px" }}>
                            
                        <FontAwesomeIcon icon={faEye}  style={{marginLeft:"20px"}}  />  
                        <span style={{marginLeft:"200px"}}> All-time</span>          <FontAwesomeIcon icon={faAngleDown}/>                      

                        

                        <div style={{display:"flex"}}>
                     <span style={{marginTop:"20px",fontSize:"15px",marginLeft:"20px"}}><p>Views</p>
                    
                     <p style={{fontSize:"20px", marginLeft:"10px"}}>22,000</p>


                     </span>
                     <span style={{marginTop:"20px",fontSize:"15px",marginLeft:"150px"}}><p>Favourite</p>
                    
                    <p style={{fontSize:"20px", marginLeft:"10px"}}>23</p>


                    </span>
                   
                    
                    </div>
                    
                    




                                        
                    </div>
                    </div>



                    
                    </card>
                    <card >
                        <div>
                        <div style={{border: "1px solid #ccc", width: "700px", height: "150px",marginLeft:"50px",marginTop:"20px" }}>
                    <FontAwesomeIcon icon={faShoppingBag}  style={{marginLeft:"20px"}}/>
                    <span style={{marginLeft:"550px"}}> All-time</span>          <FontAwesomeIcon icon={faAngleDown}/>
                    <div style={{display:"flex"}}>
                     <span style={{marginLeft:"30px",marginTop:"30px",fontSize:"15px"}}><p>All Orders</p>
                    
                     <p style={{fontSize:"30px",marginTop:"-10px"}}>1,100</p>


                     </span>
                     <span style={{marginLeft:"100px",marginTop:"30px",fontSize:"15px"}}><p >Pending</p>
                    
                     <p style={{fontSize:"30px",marginTop:"-10px"}}>0</p>

                    
                    </span>
                    <span style={{marginLeft:"100px" ,marginTop:"30px",fontSize:"15px"}}><p>Completed</p>
                    
                    <p style={{fontSize:"30px",marginTop:"-10px"}}>1,100</p>

                    
                    </span>
                    </div>
                    




                    <div style={{border: "1px solid #ccc", width: "700px", height: "150px",marginLeft:"720px" ,marginTop:"-160px" }}>
                    <FontAwesomeIcon icon={faShoppingBag}  style={{marginLeft:"20px"}}/>
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
        <h3 style={{marginLeft:"50PX"}}>Purchases</h3>
                    <div style={{marginLeft:"300px",marginTop:"-35px"}}>
                    <input 
                    type="text" 
                    placeholder="Search" style={{marginLeft:"800PX",width:"200px",height:"40px"}}/>
                               < FontAwesomeIcon icon={faSearch} style={{marginLeft:"-20px"}} />
                               <button style={{ height:"40px",marginLeft:"20px"}}> <FontAwesomeIcon icon={faFilter} /> Filter</button>
                               <button style={{ height:"40px",marginLeft:"20px"}}> <FontAwesomeIcon icon={faCalendar} /> Filter</button>
                              

                    </div>
                    <table >
                                
                    <thead>
                       
            <tr >
            <th style={{paddingLeft:"40px"}} ><input type="checkbox" /></th>
              <th  style={{paddingLeft:"20px"}} > Order Date  <IoFilterOutline />    </th >
              <th style={{paddingLeft:"130px"}}>Order Type <IoFilterOutline />  </th>
              <th style={{paddingLeft:"130px"}} > Unit Price  <IoFilterOutline />  </th>
              <th style={{paddingLeft:"100px"}}>Qty <IoFilterOutline />  </th>
              <th style={{paddingLeft:"130px"}}>Discount  <IoFilterOutline />  </th>
              <th style={{paddingLeft:"100px"}}>Order Total  <IoFilterOutline />  </th>

              <th style={{paddingLeft:"110px"}}> Status  <IoFilterOutline />  </th>
            </tr>
            
          </thead>
          <tbody   >
            <tr  >
              <td  style={{paddingLeft:"40px"}}><input type="checkbox" /></td>
              <td   style={{ }}>12 Sep 2023 - 12:25pm</td>
              <td style={{ paddingLeft:"100px"  }} >Home Delivery </td>
              
              <td style={{paddingLeft:"100px"    }}> &#x20B9;18,449.00 </td>
              <td style={{paddingLeft:"100px"  }}>2</td>
              <td style={{paddingLeft:"130px"  }}> &#x20B9;0.00 </td>
              <td style={{paddingLeft:"100px"  }}> &#x20B9;37,000.00 </td>
              <td style={{ paddingLeft:"100px"}}><button style={{color:"green"}}>Completed</button>  </td>
             

            </tr>
            <tr  >
              <td  style={{paddingLeft:"40px"}}><input type="checkbox" /></td>
              <td   style={{ }}>12 Sep 2023 - 12:25pm</td>
              <td style={{ paddingLeft:"100px"  }} >Home Delivery </td>
              
              <td style={{paddingLeft:"100px"    }}> &#x20B9;18,449.00 </td>
              <td style={{paddingLeft:"100px"  }}>2</td>
              <td style={{paddingLeft:"130px"  }}> &#x20B9;0.00 </td>
              <td style={{paddingLeft:"100px"  }}> &#x20B9;37,000.00 </td>
              <td style={{ paddingLeft:"100px"}}><button style={{color:"green"}}>Completed</button>  </td>
             

            </tr>
            <tr  >
              <td  style={{paddingLeft:"40px"}}><input type="checkbox" /></td>
              <td   style={{ }}>12 Sep 2023 - 12:25pm</td>
              <td style={{ paddingLeft:"100px"  }} >Home Delivery </td>
              
              <td style={{paddingLeft:"100px"    }}> &#x20B9;18,449.00 </td>
              <td style={{paddingLeft:"100px"  }}>2</td>
              <td style={{paddingLeft:"130px"  }}> &#x20B9;0.00 </td>
              <td style={{paddingLeft:"100px"  }}> &#x20B9;37,000.00 </td>
              <td style={{ paddingLeft:"100px"}}><button style={{color:"green"}}>Completed</button>  </td>
             

            </tr>
            <tr  >
              <td  style={{paddingLeft:"40px"}}><input type="checkbox" /></td>
              <td   style={{ }}>12 Sep 2023 - 12:25pm</td>
              <td style={{ paddingLeft:"100px"  }} >Home Delivery </td>
              
              <td style={{paddingLeft:"100px"    }}> &#x20B9;18,449.00 </td>
              <td style={{paddingLeft:"100px"  }}>2</td>
              <td style={{paddingLeft:"130px"  }}> &#x20B9;0.00 </td>
              <td style={{paddingLeft:"100px"  }}> &#x20B9;37,000.00 </td>
              <td style={{ paddingLeft:"100px"}}><button style={{color:"green"}}>Completed</button>  </td>
             

            </tr>
            <tr  >
              <td  style={{paddingLeft:"40px"}}><input type="checkbox" /></td>
              <td   style={{ }}>12 Sep 2023 - 12:25pm</td>
              <td style={{ paddingLeft:"100px"  }} >Home Delivery </td>
              
              <td style={{paddingLeft:"100px"    }}> &#x20B9;18,449.00 </td>
              <td style={{paddingLeft:"100px"  }}>2</td>
              <td style={{paddingLeft:"130px"  }}> &#x20B9;0.00 </td>
              <td style={{paddingLeft:"100px"  }}> &#x20B9;37,000.00 </td>
              <td style={{ paddingLeft:"100px"}}><button style={{color:"green"}}>Completed</button>  </td>
             

            </tr>
            <tr  >
              <td  style={{paddingLeft:"40px"}}><input type="checkbox" /></td>
              <td   style={{ }}>12 Sep 2023 - 12:25pm</td>
              <td style={{ paddingLeft:"100px"  }} >Home Delivery </td>
              
              <td style={{paddingLeft:"100px"    }}> &#x20B9;18,449.00 </td>
              <td style={{paddingLeft:"100px"  }}>2</td>
              <td style={{paddingLeft:"130px"  }}> &#x20B9;0.00 </td>
              <td style={{paddingLeft:"100px"  }}> &#x20B9;37,000.00 </td>
              <td style={{ paddingLeft:"100px"}}><button style={{color:"green"}}>Completed</button>  </td>
             

            </tr>
            <tr  >
              <td  style={{paddingLeft:"40px"}}><input type="checkbox" /></td>
              <td   style={{ }}>12 Sep 2023 - 12:25pm</td>
              <td style={{ paddingLeft:"100px"  }} >Home Delivery </td>
              
              <td style={{paddingLeft:"100px"    }}> &#x20B9;18,449.00 </td>
              <td style={{paddingLeft:"100px"  }}>2</td>
              <td style={{paddingLeft:"130px"  }}> &#x20B9;0.00 </td>
              <td style={{paddingLeft:"100px"  }}> &#x20B9;37,000.00 </td>
              <td style={{ paddingLeft:"100px"}}><button style={{color:"green"}}>Completed</button>  </td>
             

            </tr>
            <tr  >
              <td  style={{paddingLeft:"40px"}}><input type="checkbox" /></td>
              <td   style={{ }}>12 Sep 2023 - 12:25pm</td>
              <td style={{ paddingLeft:"100px"  }} >Home Delivery </td>
              
              <td style={{paddingLeft:"100px"    }}> &#x20B9;18,449.00 </td>
              <td style={{paddingLeft:"100px"  }}>2</td>
              <td style={{paddingLeft:"130px"  }}> &#x20B9;0.00 </td>
              <td style={{paddingLeft:"100px"  }}> &#x20B9;37,000.00 </td>
              <td style={{ paddingLeft:"100px"}}><button style={{color:"green"}}>Completed</button>  </td>
             

            </tr>
            <tr  >
              <td  style={{paddingLeft:"40px"}}><input type="checkbox" /></td>
              <td   style={{ }}>12 Sep 2023 - 12:25pm</td>
              <td style={{ paddingLeft:"100px"  }} >Home Delivery </td>
              
              <td style={{paddingLeft:"100px"    }}> &#x20B9;18,449.00 </td>
              <td style={{paddingLeft:"100px"  }}>2</td>
              <td style={{paddingLeft:"130px"  }}> &#x20B9;0.00 </td>
              <td style={{paddingLeft:"100px"  }}> &#x20B9;37,000.00 </td>
              <td style={{ paddingLeft:"100px"}}><button style={{color:"green"}}>Completed</button>  </td>
             

            </tr>
            <tr  >
              <td  style={{paddingLeft:"40px"}}><input type="checkbox" /></td>
              <td   style={{ }}>12 Sep 2023 - 12:25pm</td>
              <td style={{ paddingLeft:"100px"  }} >Home Delivery </td>
              
              <td style={{paddingLeft:"100px"    }}> &#x20B9;18,449.00 </td>
              <td style={{paddingLeft:"100px"  }}>2</td>
              <td style={{paddingLeft:"130px"  }}> &#x20B9;0.00 </td>
              <td style={{paddingLeft:"100px"  }}> &#x20B9;37,000.00 </td>
              <td style={{ paddingLeft:"100px"}}><button style={{color:"green"}}>Completed</button>  </td>
             

            </tr>
            <tr  >
              <td  style={{paddingLeft:"40px"}}><input type="checkbox" /></td>
              <td   style={{ }}>12 Sep 2023 - 12:25pm</td>
              <td style={{ paddingLeft:"100px"  }} >Home Delivery </td>
              
              <td style={{paddingLeft:"100px"    }}> &#x20B9;18,449.00 </td>
              <td style={{paddingLeft:"100px"  }}>2</td>
              <td style={{paddingLeft:"130px"  }}> npmn0.00 </td>
              <td style={{paddingLeft:"100px"  }}> &#x20B9;37,000.00 </td>
              <td style={{ paddingLeft:"100px"}}><button style={{color:"green"}}>Completed</button>  </td>
             

            </tr>
            
            <tr  >
              <td  style={{paddingLeft:"40px"}}><input type="checkbox" /></td>
              <td   style={{ }}>12 Sep 2023 - 12:25pm</td>
              <td style={{ paddingLeft:"100px"  }} >Home Delivery </td>
              
              <td style={{paddingLeft:"100px"    }}> &#x20B9;18,449.00 </td>
              <td style={{paddingLeft:"100px"  }}>2</td>
              <td style={{paddingLeft:"130px"  }}> &#x20B9;0.00 </td>
              <td style={{paddingLeft:"100px"  }}> &#x20B9;37,000.00 </td>
              <td style={{ paddingLeft:"100px"}}><button style={{color:"green"}}>Completed</button>  </td>
             

            </tr>
            <tr  >
              <td  style={{paddingLeft:"40px"}}><input type="checkbox" /></td>
              <td   style={{ }}>12 Sep 2023 - 12:25pm</td>
              <td style={{ paddingLeft:"100px"  }} >Home Delivery </td>
              
              <td style={{paddingLeft:"100px"    }}> &#x20B9;18,449.00 </td>
              <td style={{paddingLeft:"100px"  }}>2</td>
              <td style={{paddingLeft:"130px"  }}> &#x20B9;0.00 </td>
              <td style={{paddingLeft:"100px"  }}> &#x20B9;37,000.00 </td>
              <td style={{ paddingLeft:"100px"}}><button style={{color:"green"}}>Completed</button>  </td>
             

            </tr>
          

            </tbody>
         
                    </table>
                  
    </div>



        );
    }
    
    export default EditProduct;
    