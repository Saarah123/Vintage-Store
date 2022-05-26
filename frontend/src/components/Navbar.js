import React from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { Button } from "@mui/material";



const  Navbar = () => {
  
return (
  <>
  <div className="Navbar">
    <div className="left">

      <h3 className="label">SAKSHI'S VINTAGE STORE</h3>
    </div>
     
         <div className="right">
          <div>
          <Link to = {"/"} > <Button style={{color:"pink",  fontSize:"17px", hover:"lavender", textDecoration:"none"}} className="shop" >HOME</Button></Link> 
          </div>
            <div>
          <Link to = {"/Shop"} > <Button style={{color:"pink",  fontSize:"17px", hover:"lavender",}} className="shop" >SHOP</Button></Link> 
          </div>
          <div>
          <Link to = {"/SignUp"} > <Button style={{color:"pink",  fontSize:"17px", hover:"lavender",}} className="shop" >SIGN UP</Button></Link>
          </div>
          <div>
          <Link to = {"/Cart"} > <Button style={{color:"pink",  fontSize:"17px", hover:"lavender",}} className="cart" >CART</Button></Link>
          </div>
          </div> 
       
       </div>
    
  </>
)
  

 

}
 export default Navbar;