import { useEffect } from "react";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { Stack, Rating } from "@mui/material";
import { ProductData } from "../redux/action";
import axios from "axios";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"

export const Shop = () => {
  const dispatch = useDispatch();
  const store = useSelector((e) => e.setprod);
  console.log(store)
    
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5050/products").then(({ data }) => {
    dispatch(ProductData(data)); 
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
            {store.map((ev) => (
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
                <h3 style={{ fontSize: "14px", paddingLeft: "10px" }}>
                {ev.title}
                </h3>
                <h4 style={{ fontSize: "12px", paddingLeft: "10px" }}>
                  {" "}
                  Rs 500
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