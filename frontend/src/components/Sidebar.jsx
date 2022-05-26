import { Article, Group, Home, Storefront } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
  Stack,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { ProductData } from "../redux/action";


const Sidebar = () => {
  const dispatch = useDispatch();

  const handleSorted = (query) => {
    axios
      .get(
        `http://localhost:5050/products?_sort=price&_order=${query}`
      )
      .then(({ data }) => {
       dispatch(ProductData(data))
        
      });
  };
  const handleSortedData = (order) => {
    axios
      .get(`http://localhost:5050/products?category=${order}`)
      .then(({ data }) => {
       console.log(data)
       dispatch(ProductData(data))
      });
  };
  const handleAllData = () => {
    axios.get(`http://localhost:5050/products`).then(({ data }) => {
     
    });
  };

  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List sx={{bgcolor:"black", color:"white"}}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Home  sx={{color:"white", fontSize:"30px" }}/>
              </ListItemIcon>
              <ListItemText primary="All Products" onClick={handleAllData} sx={{fontSize:"25px"}} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Article sx={{color:"white",fontSize:"30px" }} />
                
              </ListItemIcon>
              <ListItemText
                primary="Men's wear"
                onClick={() => handleSortedData("Men")}
                sx={{fontSize:"25px"}} 
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Group sx={{color:"white", fontSize:"30px" }}/>
              </ListItemIcon>
              <ListItemText
                primary="Women's wear"
                onClick={() => handleSortedData("Women")}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{fontSize:"250px"}}>
            <ListItemButton sx={{fontSize:"250px"}}>
              <ListItemIcon>
                <Storefront sx={{color:"white" , fontSize:"30px"}} />
              </ListItemIcon>
              <ListItemText
                primary="Electronics"
                onClick={() => handleSortedData("Electronics")}
                 size="large"
              />
            </ListItemButton>
          </ListItem>
        </List>
        <Stack spacing={2} direction="column">
          <Button
            variant="contained"
            sx={{ color: "white" , bgcolor:"black" ,fontSize:"20px" , marginTop : "6%"}}
            onClick={() => handleSorted("asc")}
          >
           PRICE +
          </Button>
          <Button
            variant="contained"
            sx={{ color: "white" ,  bgcolor:"black" ,fontSize:"20px" }}
            onClick={() => handleSorted("desc")}
          >
            PRICE -
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Sidebar;