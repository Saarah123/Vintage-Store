import React from 'react';
import { Button } from '@mui/material';
import { Select, MenuItem, FormControl, InputLabel, Grid, Box } from "@mui/material";
import {Link} from "react-router-dom";
import {
    GetData,
    sort_name_ass,
    sort_name_dis,
    sort_price_h_to_l,
    sort_price_l_to_h,
    filter_by_catagory ,
  } from "../redux/action";
  import { useDispatch, useSelector } from "react-redux";
  import { useEffect } from 'react';
  
  const Shorting = () => {
      const [select, setSelect] = React.useState("");
      
      const Dispatch = useDispatch();
      // const { Data } = useSelector((store) => store.productFetch);


  
  
       
    const handleChange = (e) => {
        setSelect(e.target.value);
        if (e.target.value == "PriceAss") {
          Dispatch(sort_price_l_to_h());
        } else if (e.target.value == "PriceDis") {
          Dispatch(sort_price_h_to_l());
        } 
        else if (e.target.value == "NameAss") {
          Dispatch(sort_name_ass());
        } else if (e.target.value == "NameDis") {
          Dispatch(sort_name_dis());
        } else if (e.target.value == "none") {
          Dispatch(GetData());
        }else if (e.target.value == "Men"){
          Dispatch( filter_by_catagory (e.target.value))
        }
      };

      


    return (
        <>
        <FormControl style={{ mt: 5  , minWidth: 200 ,  backgroundColor:"lavender" , color:"white", marginTop:"16%"}} size="small">
          <InputLabel id="demo-select-small" ><b>SORT</b></InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={select}
            label="Short"
            onChange={handleChange}
          >
            <MenuItem value={"none"}>
              <em>None</em>
            </MenuItem>
            <MenuItem value={"NameAss"}>Name Ascending</MenuItem>
            <MenuItem value={"NameDis"}>Name Descending</MenuItem>
            <MenuItem value={"PriceAss"}>Price Ascending</MenuItem>
            <MenuItem value={"PriceDis"}>Price Descending</MenuItem>
            
            
          </Select>
         
        </FormControl>
        <Box m={5} mt={20} sx={{display:"flex" , flexDirection:"column" , width:"100px", gap:"10px" }}>
          <Button  variant = "contained" ><Link style={{color:"pink"}}  to={"/category/Men"}>
            Men
          </Link></Button>
          <Button variant = "contained"><Link style={{color:"pink"}}  to={"/category/Women"}>
          Women
          </Link></Button>
          <Button variant = "contained"><Link style={{color:"pink"}}  to={"/category/Electronics"}>
          Electronics
          </Link>  </Button>
          </Box>


        </>
    );
}

export default Shorting;