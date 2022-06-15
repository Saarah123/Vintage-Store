import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Grid } from "@mui/material";
import axios from "axios";
import { Box } from "@mui/system";
import { Stack, Rating } from "@mui/material";
import { ProductData } from "../redux/action";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";
import { GetData} from "../redux/action";
import Shorting from "./Sidebar";
import {
    
    sort_name_ass,
    sort_name_dis,
    sort_price_h_to_l,
    sort_price_l_to_h,
    filter_by_catagory ,
  } from "../redux/action";
  import { useDispatch, useSelector } from "react-redux";

export default function Filter() {
 const [select, setSelect] = React.useState("");
  const [state, setState] = useState([]);
  const { category } = useParams();
  const Dispatch = useDispatch();


  // const handleChange = (e) => {
  //   setSelect(e.target.value);
  //   if (e.target.value == "PriceAss") {
  //     Dispatch(sort_price_l_to_h());
  //   } else if (e.target.value == "PriceDis") {
  //     Dispatch(sort_price_h_to_l());
  //   } 
  //   else if (e.target.value == "NameAss") {
  //     Dispatch(sort_name_ass());
  //   } else if (e.target.value == "NameDis") {
  //     Dispatch(sort_name_dis());
  //   } else if (e.target.value == "none") {
  //     Dispatch(GetData());
  //   }else if (e.target.value == "Men"){
  //     Dispatch( filter_by_catagory (e.target.value))
  //   }
  // };

  useEffect(() => {
    axios
      .get("https://sakshivintage.herokuapp.com/products")
      .then((res) =>
        setState([...res.data.filter((el) => el.category === category)])
        );
  }, [category]);
  console.log(state);
  return (
    <>
 <div className='top'>
    <a href=" https://vintagedancer.com/1950s/1950s-fashion-women-get-look/ " target="_blank" rel="noopener noreferrer"><h3><b>ABOUT</b></h3></a>
     
    </div>
      <div
        style={{
          display: "flex",
        }}
      >
        <div style={{ flex: "1", marginTop: "5%" }}>
          <Shorting />
        </div>

        <div className="cardiv">
          <div className="griddiv">
            {state.map((ev) => (
              <Link to={`/ProductDetail/${ev.id}`}>
              <div
                className="productdiv"
                style={{
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                  cursor: "pointer",
                }}
                
                // onClick={() => navigate(`/product/${e._id}`)}
              >
                <img
                  src={ev.image}
                  alt=""
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "contain",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
                <h2 style={{ fontSize: "14px", paddingLeft: "10px" , color:"black"}}>
                <b>{ev.title}</b>
                </h2>
                <h4 style={{ fontSize: "12px", paddingLeft: "10px" }}>
                  {" "}
                  $ {ev.price}
                </h4>
                <Stack spacing={2}>
                  <Rating value={3.5} precision={0.5} size="small" />
                </Stack>
                <p style={{ color: "red", paddingLeft: "10px" }}>
                 Free Sale !!!
                </p>
              </div>
              </Link>

            ))}
          </div>
        </div>
      </div>
    </>
  )
}
