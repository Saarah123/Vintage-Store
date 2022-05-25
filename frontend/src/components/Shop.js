import { useEffect } from "react";
import Sidebar from "./Sidebar";
// import { useDispatch, useSelector } from "react-redux";
import { Stack, Rating } from "@mui/material";

import axios from "axios";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

export const Shop = () => {
  // const dispatch = useDispatch();
  // const store = useSelector((e) => e.MasaiReducer.sortedData);
  // const mainData = useSelector((e) => e.MasaiReducer.product);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://ecommerce-masai.herokuapp.com/products").then(({ data }) => {
    
    });
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
        }}
      >
        <div style={{ flex: "1", marginTop: "5%" }}>
          <Sidebar />
        </div>

        <div className="cardiv">
          <div className="griddiv">
            {/* {mainData.map((e) => ( */}
              <div
                className="productdiv"
                style={{
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                  cursor: "pointer",
                }}
                
                // onClick={() => navigate(`/product/${e._id}`)}
              >
                <img
                  src="https://i2.wp.com/www.socialnews.xyz/wp-content/uploads/2020/02/22/Actress-Rashmika-Mandanna-Goofy-New-HD-Stills-14.jpg?resize=1708%2C2560&quality=90&zoom=1&ssl=1 "
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
                <h3 style={{ fontSize: "14px", paddingLeft: "10px" }}>
                 Product
                </h3>
                <h4 style={{ fontSize: "12px", paddingLeft: "10px" }}>
                  {" "}
                  Rs 500
                </h4>
                <Stack spacing={2}>
                  <Rating value={5} precision={0.5} size="small" />
                </Stack>
                <p style={{ color: "red", paddingLeft: "10px" }}>
                 
                </p>
              </div>
            {/* ))} */}
          </div>
        </div>
      </div>
    </>
  );
};