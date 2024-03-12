import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch ,faStore, faUser , faAngleDown,faUserFriends, faShoppingBag,faFilter, faCalendar, faShare, faCopy} from '@fortawesome/free-solid-svg-icons';
import { IoFilterOutline } from "react-icons/io5";
import './App.css';






const User = () =>{
   

    return (

<div>
   <div style={{marginTop:"10px"}} >
                <input
                    type="text"
                    placeholder="Search" style={{marginLeft:"800PX",width:"300px",height:"40px"}}/>
                   < FontAwesomeIcon icon={faSearch} style={{marginLeft:"-20px"}} />
                   <button style={{ height:"40px",marginLeft:"20px",background:"#F58634",color:"white"}}> <FontAwesomeIcon icon={faStore} /> visti My Store</button>
                   <FontAwesomeIcon icon={faUser} style={{height:"30px",marginLeft:"20px",marginTop:"10px"}} />
                     <span style={{ fontSize:"20px",marginLeft:"10px"}}> Sandeep bhau </span>
                    <FontAwesomeIcon icon={faAngleDown} style={{height:"30px",marginLeft:"10px",marginTop:"10px"}}/>
                    
                    </div>
                    <div style={{marginTop:"40px"}} >
                        <button style={{ background:"#F58634",color:"white",height:"40px",width:"250px",fontSize:"20px", marginLeft:"50px"}}>
                            Customer Summary
                        </button>
                        <button style={{ background:"#F58634",color:"white" ,height:"40px",width:"250px",fontSize:"20px",marginLeft:"950px"}}>+ Create New Customer</button>
                    </div>
                    <card >
                        <div>
                        <div style={{border: "1px solid #ccc", width: "700px", height: "150px",marginLeft:"50px",marginTop:"20px" }}>
                    <FontAwesomeIcon icon={faUserFriends}  style={{marginLeft:"20px"}}/>
                    <span style={{marginLeft:"550px"}}> This Week</span>          <FontAwesomeIcon icon={faAngleDown}/>
                    <div style={{display:"flex"}}>
                     <span style={{marginLeft:"30px"}}><p>All customers</p>
                    
                     <p><span style={{fontSize:"30px", color:"darkblack"}}>1,250</span> <span style={{color:"green"}} > +15.80%</span></p>


                     </span>
                     <span style={{marginLeft:"100px",}}><p >Active</p>
                    
                     <p><span style={{fontSize:"30px", color:"darkblack"}}>1,180</span> <span style={{color:"green"}} > +85%</span></p>

                    
                    </span>
                    <span style={{marginLeft:"100px"}}><p>In-Active</p>
                    
                    <p><span style={{fontSize:"30px", color:"darkblack"}}>70</span> <span style={{color:"Red"}} > -10%</span></p>

                    
                    </span>
                    </div>
                    




                    <div style={{border: "1px solid #ccc", width: "700px", height: "150px",marginLeft:"750px" ,marginTop:"-130px" }}>
                    <FontAwesomeIcon icon={faShoppingBag}  style={{marginLeft:"20px"}}/>
                    <span style={{marginLeft:"550px"}}> This Week</span>              <FontAwesomeIcon icon={faAngleDown}/>
                    <div style={{display:"flex"}}>
                     <span style={{marginLeft:"30px"}}><p>New Customers</p>
                    
                     <p><span style={{fontSize:"30px", color:"darkblack"}}>30</span> <span style={{color:"red"}} > -20%</span></p>

                     </span>
                     <span style={{marginLeft:"100px",}}><p >Purchasing</p>
                    
                     <p><span style={{fontSize:"30px", color:"darkblack"}}>657</span> </p>

                    
                    </span>
                    <span style={{marginLeft:"100px"}}><p>Abandoned Carts</p>
                    
                    <p><span style={{fontSize:"30px", color:"darkblack"}}>5</span> </p>

                    
                    </span>
                    </div>
                    </div>
                    </div>
                    </div>
                    
                    </card>
                    <h2 style={{marginLeft:"50PX"}}>Customers</h2>
                    <div style={{marginLeft:"110px",marginTop:"-35px"}}>
                    <input 
                    type="text" 
                    placeholder="Search" style={{marginLeft:"800PX",width:"200px",height:"40px"}}/>
                               < FontAwesomeIcon icon={faSearch} style={{marginLeft:"-20px"}} />
                               <button style={{ height:"40px",marginLeft:"20px"}}> <FontAwesomeIcon icon={faFilter} /> Filter</button>
                               <button style={{ height:"40px",marginLeft:"20px"}}> <FontAwesomeIcon icon={faCalendar} /> Filter</button>
                               <button style={{ height:"40px",marginLeft:"20px"}}> <FontAwesomeIcon icon={faShare} /> Share</button>
                               <button style={{ height:"40px",marginLeft:"20px",width:"120px"}}> Bulk Action</button>          <FontAwesomeIcon icon={faAngleDown} style={{marginLeft:"-20px"}}/>

                    </div>
                    <table >
                    <thead >
            <tr >
            <th style={{paddingLeft:"40px"}} ><input type="checkbox" /></th>
              <th  style={{paddingLeft:"20px"}} > Customer Name   <IoFilterOutline />    </th >
              <th style={{paddingLeft:"90px"}}>Email  <IoFilterOutline />  </th>
              <th style={{paddingLeft:"100px"}} >Phone  <IoFilterOutline />  </th>
              <th style={{paddingLeft:"100px"}}>Orders  <IoFilterOutline />  </th>
              <th style={{paddingLeft:"100px"}}>Order Total  <IoFilterOutline />  </th>
              <th style={{paddingLeft:"100px"}}>Customer Since  <IoFilterOutline />  </th>
              <th style={{paddingLeft:"100px"}}> Status  <IoFilterOutline />  </th>
            </tr>
          </thead>
          <tbody   >
            <tr  >
              <td  style={{paddingLeft:"40px"}}><input type="checkbox" /></td>
              <td   style={{paddingLeft:"30px",paddingBottom:"15px" }}>Sravan Kumar</td>
              <td style={{paddingLeft:"50px"   }} >ionsravan@mail.com  <FontAwesomeIcon icon={faCopy} /></td>
              
              <td style={{paddingLeft:"50px"   }}>+91-8888888888  <FontAwesomeIcon icon={faCopy} /></td>
              <td style={{paddingLeft:"120px"   }}>5</td>
              <td style={{ paddingLeft:"100px"  }}> &#x20B9;2,680.00</td>
              <td style={{ paddingLeft:"100px"  }}> 12 Aug 2022 - 12:25 am </td>
              <td style={{paddingLeft:"100px"}}><button style={{color:"green",background:"#D3D3D3"}}> Active</button> </td>

            </tr>
            <tr>
            <td  style={{paddingLeft:"40px"}}><input type="checkbox" /></td>
             
              <td style={{paddingBottom:"15px",paddingLeft:"30px" }}>monika singh </td>
              <td style={{paddingLeft:"40px"   }}>monika@mail.com  <FontAwesomeIcon icon={faCopy} /></td>
             
              <td style={{paddingLeft:"50px"   }}>+91-9876543210  <FontAwesomeIcon icon={faCopy} /></td>
              <td style={{paddingLeft:"120px"   }}>12</td>
              <td style={{ paddingLeft:"100px"  }}> &#x20B9;10,278.00</td>
              <td style={{ paddingLeft:"100px"  }}> 12 Aug 2022 - 12:25 am </td>
              <td style={{paddingLeft:"100px"}}><button style={{color:"red",background:"pink"}}> InActive</button> </td>

            </tr>
            <tr>
            <td  style={{paddingLeft:"40px"}}><input type="checkbox" /></td>
              <td style={{paddingBottom:"15px",paddingLeft:"30px" }}>Chandani Chadda</td>
              <td style={{paddingLeft:"50px"   }}>Chandani@mail.com  <FontAwesomeIcon icon={faCopy} /></td>
             
              <td style={{paddingLeft:"50px"   }}>+91-9876543210  <FontAwesomeIcon icon={faCopy} /></td>
              <td style={{paddingLeft:"120px"   }}>25</td>
              <td style={{ paddingLeft:"100px"  }}> &#x20B9;25,499.00</td>
              <td style={{ paddingLeft:"100px"  }}> 12 Aug 2022 - 12:25 am </td>
              <td style={{paddingLeft:"100px"}}><button style={{color:"green",background:"#D3D3D3"}}> Active</button> </td>

            </tr>
            <tr>
            <td  style={{paddingLeft:"40px"}}><input type="checkbox" /></td>
              <td style={{paddingBottom:"15px",paddingLeft:"30px" }}>Sonal Thakare</td>
              <td style={{paddingLeft:"50px"   }}>sonal@mail.com  <FontAwesomeIcon icon={faCopy} /></td>
             
              <td style={{paddingLeft:"50px"   }}>+91-9876543210  <FontAwesomeIcon icon={faCopy} /></td>
              <td style={{paddingLeft:"120px"   }}>5</td>
              <td style={{ paddingLeft:"100px"  }}> &#x20B9;1,62,999.00</td>
              <td style={{ paddingLeft:"100px"  }}> 12 Aug 2022 - 12:25 am </td>
              <td style={{paddingLeft:"100px"}}><button style={{color:"green",background:"#D3D3D3"}}> Active</button> </td>

            </tr>
            <tr>
            <td  style={{paddingLeft:"40px"}}><input type="checkbox" /></td>
              <td style={{paddingBottom:"15px",paddingLeft:"30px" }}>Chamak Chacha</td>
              <td style={{paddingLeft:"50px"   }}>chanmpak@mail.com  <FontAwesomeIcon icon={faCopy} /></td> 
             
              <td style={{paddingLeft:"50px"   }}>+91-9876543210  <FontAwesomeIcon icon={faCopy} /></td>
              <td style={{paddingLeft:"120px"   }}>2</td>
              <td style={{ paddingLeft:"100px"  }}> &#x20B9;35,349.00</td>
              <td style={{ paddingLeft:"100px"  }}> 12 Aug 2022 - 12:25 am </td>
              <td style={{paddingLeft:"100px"}}><button style={{color:"green",background:"#D3D3D3"}}> Active</button> </td>

            </tr>
            <tr>
            <td  style={{paddingLeft:"40px"}}><input type="checkbox" /></td>
              <td style={{paddingBottom:"15px",paddingLeft:"30px" }}>Vikram Sharama</td>
              <td style={{paddingLeft:"40px"   }}>vikram@mail.com  <FontAwesomeIcon icon={faCopy} /></td>
              
              <td style={{paddingLeft:"50px"   }}>+91-9876543210  <FontAwesomeIcon icon={faCopy} /></td>
              <td style={{paddingLeft:"120px"   }}>5</td>
              <td style={{ paddingLeft:"100px"  }}> &#x20B9;2,680.00</td>
              <td style={{ paddingLeft:"100px"  }}> 12 Aug 2022 - 12:25 am </td>
              <td style={{paddingLeft:"100px"}}><button style={{color:"green",background:"#D3D3D3"}}> Active</button> </td>

            </tr>
            <tr>
            <td style={{paddingLeft:"40px"}} ><input type="checkbox" /></td>
            <td style={{paddingBottom:"15px",paddingLeft:"30px" }}>monika singh </td>
              <td style={{paddingLeft:"40px"   }}>monika@mail.com  <FontAwesomeIcon icon={faCopy} /></td>
             
              <td style={{paddingLeft:"50px"   }}>+91-9876543210  <FontAwesomeIcon icon={faCopy} /></td>
              <td style={{paddingLeft:"120px"   }}>12</td>
              <td style={{ paddingLeft:"100px"  }}> &#x20B9;10,278.00</td>
              <td style={{ paddingLeft:"100px"  }}> 12 Aug 2022 - 12:25 am </td>
              <td style={{paddingLeft:"100px"}}><button style={{color:"red",background:"pink"}}> InActive</button> </td>

            </tr>
            <tr>
            <td style={{paddingLeft:"40px"}} ><input type="checkbox" /></td>
              <td style={{paddingBottom:"15px",paddingLeft:"30px" }}>Chandani Chadda</td>
              <td style={{paddingLeft:"40px"   }}>Chandani@mail.com  <FontAwesomeIcon icon={faCopy} /></td>
             
              <td style={{paddingLeft:"50px"   }}>+91-9876543210  <FontAwesomeIcon icon={faCopy} /></td>
              <td style={{paddingLeft:"120px"   }}>25</td>
              <td style={{ paddingLeft:"100px"  }}> &#x20B9;25,499.00</td>
              <td style={{ paddingLeft:"100px"  }}> 12 Aug 2022 - 12:25 am </td>
              <td style={{paddingLeft:"100px"}}><button style={{color:"red",background:"pink"}}>In Active</button> </td>

            </tr>
            <tr>
            <td style={{paddingLeft:"40px"}} ><input type="checkbox" /></td>
              <td style={{paddingBottom:"15px",paddingLeft:"30px" }}>Sonal Thakare</td>
              <td style={{paddingLeft:"40px"}}> sonal@mail.com  <FontAwesomeIcon icon={faCopy} /></td>
             
              <td style={{paddingLeft:"50px"   }}>+91-9876543210  <FontAwesomeIcon icon={faCopy} /></td>
              <td style={{paddingLeft:"120px"   }}>5</td>
              <td style={{ paddingLeft:"100px"  }}> &#x20B9;1,62,999.00</td>
              <td style={{ paddingLeft:"100px"  }}> 12 Aug 2022 - 12:25 am </td>
              <td style={{paddingLeft:"100px"}}><button style={{color:"green",background:"#D3D3D3"}}> Active</button> </td>

            </tr>
            <tr>
            <td style={{paddingLeft:"40px"}} ><input type="checkbox" /></td>
              <td style={{paddingLeft:"30px" }}>Chamak Chacha</td>
              <td style={{paddingLeft:"40px"   }}>chan=mpak@mail.com <FontAwesomeIcon icon={faCopy} /></td>
             
              <td style={{paddingLeft:"50px"   }}>+91-9876543210 <FontAwesomeIcon icon={faCopy} /></td>
              <td style={{paddingLeft:"120px"   }}>2</td>
              <td style={{ paddingLeft:"100px"  }}> &#x20B9;35,349.00</td>
              <td style={{ paddingLeft:"100px"  }}> 12 Aug 2022 - 12:25 am </td>
              <td style={{paddingLeft:"100px"}}><button style={{color:" green",background:"#D3D3D3"}}> Active</button> </td>

            </tr>

            {/* Add more rows as needed */}
          </tbody>
                    </table>
                  
</div>
        )
    }
    
    export default User;