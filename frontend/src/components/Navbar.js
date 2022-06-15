import React from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { Button } from "@mui/material";



const  Navbar = () => {
  
return (
  <>
  <div className="Navbar">
    <div className="left">

   <Link to={"/"}> <h3 className="label"><i>SAKSHI'S VINTAGE STORE</i></h3></Link>  
    </div>
     
         <div className="right">
          <div>
          <Link to = {"/"} > <Button style={{color:"pink",  fontSize:"17px", hover:"lavender", textDecoration:"none"}} className="shop" ><i>HOME</i></Button></Link> 
          </div>
            <div>
          <Link to = {"/Shop"} > <Button style={{color:"pink",  fontSize:"17px", hover:"lavender",}} className="shop" ><i>SHOP</i></Button></Link> 
          </div>
          <div>
          <Link to = {"/Cart"} > <Button style={{color:"pink",  fontSize:"17px", hover:"lavender",}} className="shop" ><i>CART</i></Button></Link>
          </div>
          <div>
          <Link to = {"/SignUp"} > <Button style={{color:"pink",  fontSize:"17px", hover:"lavender",}} className="shop" ><i>SIGN UP</i></Button></Link>
          </div>
          <div>
          <Link to = {"/LogIn"} > <Button style={{color:"pink",  fontSize:"17px", hover:"lavender",}} className="shop" ><i>LOG IN</i></Button></Link>
          </div>
          </div> 
       
       </div>
    
  </>
)
  

 

}
 export default Navbar;