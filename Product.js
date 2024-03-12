import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faShoppingCart, faClock, faMapMarkerAlt, faUser, faShoppingBag,faSearch,faFilter,faCalendar,faCopy,faShare, faAnglesDown} from '@fortawesome/free-solid-svg-icons';
import { IoFilterOutline } from "react-icons/io5";
import fig1 from './images/fig1.png'







const Product= () => {
  return (
    <div>
        <div style={{marginTop:"40px"}} >
                        <button style={{ background:"#F58634",color:"white",height:"40px",width:"150px",fontSize:"20px", marginLeft:"50px"}}>
                            Product
                        </button>
                        <button style={{ background:"#F58634",color:"white" ,height:"40px",width:"200px",fontSize:"20px",marginLeft:"1050px"}}>+  Add Product</button>
                        
                        
                    </div>
                    <h2 style={{marginLeft:"50PX"}}>Purchases</h2>
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
              <th  style={{paddingLeft:"80px"}} > Product Name  <IoFilterOutline />    </th >
              <th style={{paddingLeft:"100px"}}>Category  <IoFilterOutline />  </th>
              <th style={{paddingLeft:"80px"}} >Unit Price  <IoFilterOutline />  </th>
              <th style={{paddingLeft:"60px"}}>In-Stock  <IoFilterOutline />  </th>
              <th style={{paddingLeft:"60px"}}>Discount  <IoFilterOutline />  </th>
              <th style={{paddingLeft:"90px"}}>Total Value  <IoFilterOutline />  </th>
              <th style={{paddingLeft:"90px"}}> Action  <IoFilterOutline />  </th>
              <th style={{paddingLeft:"50px"}}> Status  <IoFilterOutline />  </th>
            </tr>
            
          </thead>
          <tbody   >
          <tr  >
              <td  style={{paddingLeft:"40px"}}><input type="checkbox" /></td>
              <td> <img src={fig1} alt="fig1"  style={{width:"50px",height:"50px"}} /><p style={{marginTop:"-35px",marginLeft:"50px"}}> Samsung Washing Mac..</p></td>
              <td style={{paddingLeft:"40px"}}>Washing Machine</td>
              <td style={{paddingLeft:"60px"}}>&#x20B9;11,000.00</td>
              <td style={{paddingLeft:"80px"}}>12</td>
              <td style={{paddingLeft:"60px"}}>&#x20B9;0.00</td>
              <td style={{paddingLeft:"100px"}}>&#x20B9;99,000.00</td>
              <td style={{paddingLeft:"100px"}} ><button style={{width:"80px"}}>Publish</button>  < FontAwesomeIcon icon={faAngleDown} style={{marginLeft:"-20px"}} /></td> 
              <td style={{paddingLeft:"50px"}} ><button style={{width:"80px",color:"#F58634"}}>published</button> </td>

            </tr>
            <tr  >
              <td  style={{paddingLeft:"40px"}}><input type="checkbox" /></td>
              <td> <img src={fig1} alt="fig1"  style={{width:"50px",height:"50px"}} /><p style={{marginTop:"-35px",marginLeft:"50px"}}> Samsung Washing Mac..</p></td>
              <td style={{paddingLeft:"40px"}}>Washing Machine</td>
              <td style={{paddingLeft:"60px"}}>&#x20B9;22,000.00</td>
              <td style={{paddingLeft:"80px"}}>120</td>
              <td style={{paddingLeft:"60px"}}>&#x20B9;0.00</td>
              <td style={{paddingLeft:"100px"}}>&#x20B9;88,000.00</td>
              <td style={{paddingLeft:"100px"}} ><button style={{width:"100px"}}>unPublish</button>  < FontAwesomeIcon icon={faAngleDown} style={{marginLeft:"-20px"}} /></td> 
              <td style={{paddingLeft:"50px"}} ><button style={{width:"90px",color:"#F58634"}}>Unpublished</button> </td>

            </tr>
            <tr  >
              <td  style={{paddingLeft:"40px"}}><input type="checkbox" /></td>
              <td> <img src={fig1} alt="fig1"  style={{width:"50px",height:"50px"}} /><p style={{marginTop:"-35px",marginLeft:"50px"}}> Samsung Washing Mac..</p></td>
              <td style={{paddingLeft:"40px"}}>Washing Machine</td>
              <td style={{paddingLeft:"60px"}}>&#x20B9;12,000.00</td>
              <td style={{paddingLeft:"80px"}}>Out of stock</td>
              <td style={{paddingLeft:"60px"}}>&#x20B9;0.00</td>
              <td style={{paddingLeft:"100px"}}>&#x20B9;00</td>
              <td style={{paddingLeft:"100px"}} ><button style={{width:"100px"}}>UnPublish</button>  < FontAwesomeIcon icon={faAngleDown} style={{marginLeft:"-20px"}} /></td> 
              <td style={{paddingLeft:"50px"}} ><button style={{width:"90px",color:"orangered"}}>Unpublished</button> </td>

            </tr>
            <tr  >
              <td  style={{paddingLeft:"40px"}}><input type="checkbox" /></td>
              <td> <img src={fig1} alt="fig1"  style={{width:"50px",height:"50px"}} /><p style={{marginTop:"-35px",marginLeft:"50px"}}> Samsung Washing Mac..</p></td>
              <td style={{paddingLeft:"40px"}}>Washing Machine</td>
              <td style={{paddingLeft:"60px"}}>&#x20B9;27,000.00</td>
              <td style={{paddingLeft:"80px"}}>out of stock</td>
              <td style={{paddingLeft:"60px"}}>&#x20B9;0.00</td>
              <td style={{paddingLeft:"100px"}}>&#x20B9;88,000.00</td>
              <td style={{paddingLeft:"100px"}} ><button style={{width:"100px"}}>UnPublish</button>  < FontAwesomeIcon icon={faAngleDown} style={{marginLeft:"-20px"}} /></td> 
              <td style={{paddingLeft:"50px"}} ><button style={{width:"90px",color:"orangered"}}>Unpublished</button> </td>

            </tr>
            <tr  >
              <td  style={{paddingLeft:"40px"}}><input type="checkbox" /></td>
              <td> <img src={fig1} alt="fig1"  style={{width:"50px",height:"50px"}} /><p style={{marginTop:"-35px",marginLeft:"50px"}}> Samsung Washing Mac..</p></td>
              <td style={{paddingLeft:"40px"}}>Washing Machine</td>
              <td style={{paddingLeft:"60px"}}>&#x20B9;37,000.00</td>
              <td style={{paddingLeft:"80px"}}>8</td>
              <td style={{paddingLeft:"60px"}}>&#x20B9;0.00</td>
              <td style={{paddingLeft:"100px"}}>&#x20B9;88,000.00</td>
              <td style={{paddingLeft:"100px"}} ><button style={{width:"80px"}}>Publish</button>  < FontAwesomeIcon icon={faAngleDown} style={{marginLeft:"-20px"}} /></td> 
              <td style={{paddingLeft:"50px"}} ><button style={{width:"80px",color:"#F58634"}}>published</button> </td>

            </tr>
            <tr  >
              <td  style={{paddingLeft:"40px"}}><input type="checkbox" /></td>
              <td> <img src={fig1} alt="fig1"  style={{width:"50px",height:"50px"}} /><p style={{marginTop:"-35px",marginLeft:"50px"}}> Samsung Washing Mac..</p></td>
              <td style={{paddingLeft:"40px"}}>Washing Machine</td>
              <td style={{paddingLeft:"60px"}}>&#x20B9;2,000.00</td>
              <td style={{paddingLeft:"80px"}}>12</td>
              <td style={{paddingLeft:"60px"}}>&#x20B9;0.00</td>
              <td style={{paddingLeft:"100px"}}>&#x20B9;88,000.00</td>
              <td style={{paddingLeft:"100px"}} ><button style={{width:"80px"}}>Publish</button>  < FontAwesomeIcon icon={faAngleDown} style={{marginLeft:"-20px"}} /></td> 
              <td style={{paddingLeft:"50px"}} ><button style={{width:"80px",color:"#F58634"}}>published</button> </td>

            </tr>
            <tr  >
              <td  style={{paddingLeft:"40px"}}><input type="checkbox" /></td>
              <td> <img src={fig1} alt="fig1"  style={{width:"50px",height:"50px"}} /><p style={{marginTop:"-35px",marginLeft:"50px"}}> Samsung Washing Mac..</p></td>
              <td style={{paddingLeft:"40px"}}>Washing Machine</td>
              <td style={{paddingLeft:"60px"}}>&#x20B9;75,000.00</td>
              <td style={{paddingLeft:"80px"}}>8</td>
              <td style={{paddingLeft:"60px"}}>&#x20B9;0.00</td>
              <td style={{paddingLeft:"100px"}}>&#x20B9;99,000.00</td>
              <td style={{paddingLeft:"100px"}} ><button style={{width:"80px"}}>Publish</button>  < FontAwesomeIcon icon={faAngleDown} style={{marginLeft:"-20px"}} /></td> 
              <td style={{paddingLeft:"50px"}} ><button style={{width:"80px",color:"#F58634"}}>published</button> </td>

            </tr>
            <tr  >
              <td  style={{paddingLeft:"40px"}}><input type="checkbox" /></td>
              <td> <img src={fig1} alt="fig1"  style={{width:"50px",height:"50px"}} /><p style={{marginTop:"-35px",marginLeft:"50px"}}> Samsung Washing Mac..</p></td>
              <td style={{paddingLeft:"40px"}}>Washing Machine</td>
              <td style={{paddingLeft:"60px"}}>&#x20B9;95,000.00</td>
              <td style={{paddingLeft:"80px"}}>12</td>
              <td style={{paddingLeft:"60px"}}>&#x20B9;0.00</td>
              <td style={{paddingLeft:"100px"}}>&#x20B9;88,000.00</td>
              <td style={{paddingLeft:"100px"}} ><button style={{width:"80px"}}>Publish</button>  < FontAwesomeIcon icon={faAngleDown} style={{marginLeft:"-20px"}} /></td> 
              <td style={{paddingLeft:"50px"}} ><button style={{width:"80px",color:"#F58634"}}>published</button> </td>

            </tr>
            <tr  >
              <td  style={{paddingLeft:"40px"}}><input type="checkbox" /></td>
              <td> <img src={fig1} alt="fig1"  style={{width:"50px",height:"50px"}} /><p style={{marginTop:"-35px",marginLeft:"50px"}}> Samsung Washing Mac..</p></td>
              <td style={{paddingLeft:"40px"}}>Washing Machine</td>
              <td style={{paddingLeft:"60px"}}>&#x20B9;31,000.00</td>
              <td style={{paddingLeft:"80px"}}>120</td>
              <td style={{paddingLeft:"60px"}}>&#x20B9;0.00</td>
              <td style={{paddingLeft:"100px"}}>&#x20B9;99,000.00</td>
              <td style={{paddingLeft:"100px"}} ><button style={{width:"100px"}}>UnPublish</button>  < FontAwesomeIcon icon={faAngleDown} style={{marginLeft:"-20px"}} /></td> 
              <td style={{paddingLeft:"50px"}} ><button style={{width:"90px",color:"orangered"}}>Unpublished</button> </td>

            </tr>
         
         
            {/* Add more rows as needed */}
          </tbody>
                    </table>

    </div>
    
  
   
  );
}

export default Product;
