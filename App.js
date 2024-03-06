import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import Table from "./table";
import User from "./User";
import Customer from "./Customer 1";
import Customer2 from "./Customer 2";
import Details from "./Details ";






function App() {
  return (
    
    <div>
      {/* <Table /> */}
     
      <Router>
      <div>
      
        <Routes>
        <Route  exact path="/" element={<User />} />
       
        
          <Route path="/customer" element={<Customer />} />
          <Route path="/customer2" element={<Customer2 />} />
          <Route path="/Details" element={<Details />} />
         
        </Routes>
      </div>
    </Router>
      
    </div>
   
  );
}

export default App;
