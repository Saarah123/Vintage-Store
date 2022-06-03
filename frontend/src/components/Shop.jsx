import { useEffect } from "react";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { Stack, Rating } from "@mui/material";
import { ProductData } from "../redux/action";
import axios from "axios";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";
import { GetData} from "../redux/action";
import Shorting from "./Sidebar";



  
  
export const Shop = () => {
 
  const Dispatch = useDispatch();
    const {Data} = useSelector((Store) => Store.ProductFetch);
    console.log(Data)
    const data = useSelector((Store)=>Store.LoginFatch)
  
  
    
    useEffect(() => {
      Dispatch(GetData());
    }, []);
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
            {Data.map((ev) => (
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
  );
};