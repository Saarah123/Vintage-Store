import React, { Component } from 'react';
import {UseEffect, useState} from "react";
import formatCurrency from '../util';
import axios from "axios"

export default class Products extends Component {
  render() {

    // const UseEffectAPI = () => {
    //   const [users, setUsers] = useState([]);

      const getUsers =  () => {
       axios.get("https://fakestoreapi.com/products").then((result) => {
       console.log( result.data)        
        }).catch((err) => {
          console.log(err)
        });;
        // console.log(response);

      }
      // UseEffect(() => {
        getUsers();
      // }, []);
// 
    // }
    return (
      <div>
          <ul className="Products">
            {console.log(this.props.products)}

            {this.props.products.map((product) => (
              <li key = {product._id}>
                <div className="product">
                  <a href = {"#" + product.id}>
                    <img src={product.image} alt={product.title}></img>
                    <p>
                      {product.title}
                    </p>
                  </a>
                  <div className="product-price">
                    <div>{formatCurrency(product.price)}</div>
                    <button  
                    onClick = {() => this.props.addToCart(product)}
                    className="button primary"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
      </div>
    )
  }
}








































