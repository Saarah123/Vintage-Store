import React from "react";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import Typography from '@mui/material/Typography';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
// import {SignUp} from "./SignUp";
import "./Navbar.css";



const  Navbar = () => {
  
return (
  <>
     <AppBar position="relative" >
        <Toolbar>
       
        <Typography variant="h6" color="inherit" noWrap>
          SAKSHI'S CLOTHING STORE 
         
        </Typography>
        <div className="right">
          <div>
          <Link to = {"/"} > <Button className="shop" >HOME</Button></Link> 
          </div>
            <div>
          <Link to = {"/Shop"} > <Button className="Shop" >SHOP</Button></Link> 
          </div>
          <div>
          <Link to = {"/SignUp"} > <Button className="SignIn" >SIGN Up</Button></Link>
          </div>
          
          </div>
       
      </Toolbar>
    </AppBar>
    
  </>
)
  

 

}
 export default Navbar;