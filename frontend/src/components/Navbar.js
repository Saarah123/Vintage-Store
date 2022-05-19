import React from "react";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import Typography from '@mui/material/Typography';


const  Navbar = () => {
  

  return (
      <>
      
       <AppBar position="relative" >
        <Toolbar>
       
        <Typography variant="h6" color="inherit" noWrap>
          Album layout
        </Typography>

      </Toolbar>
    </AppBar>



</>
 );   
}


 export default Navbar;