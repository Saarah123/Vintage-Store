import React from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { Button } from "@mui/material";



const  Navbar = () => {
  
return (
  <>
  <div className="Navbar">
    <div className="left">

      <h1 className="label">SAKSHI'S   STORE</h1>
    </div>
     
         <div className="right">
          <div>
          <Link to = {"/"} > <Button className="shop" >HOME</Button></Link> 
          </div>
            <div>
          <Link to = {"/Shop"} > <Button className="Shopz" >SHOP</Button></Link> 
          </div>
          <div>
          <Link to = {"/SignUp"} > <Button className="Shopx" >SIGN UP</Button></Link>
          </div>
          
          </div> 
       
       </div>
    
  </>
)
  

 

}
 export default Navbar;