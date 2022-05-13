import React from "react";
import data from './data.json';
import Products from "./components/Products";
import Filter from "./components/Filter";

class App extends React.Component {
constructor(){
  super();
  this.state = {
    products: data.products,
    size:"",
    sorts:"",
  };
}
sortProducts(event){
  //impl
  console.log(event.target.value);
}
filterProducts(event){
//impl
console.log(event.target.value);
if(event.target.value === ""){
  
}
this.setState({
  size:event.target.value,
  products:data.products.filter(product => product.availableSizes.indexOf(event.target.value)>=0),
})
}
  render() {
    return (
      <div className="grid-container">
  
        <header>
          <a href = "/">React shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter
               count={this.state.products.length}
               size={this.state.size}
               sort={this.state.sort}
               FilterProducts={this.filterProducts}
               sortProducts={this.sortProducts}
              
              > </Filter>
              <Products products={this.state.products}></Products>

            </div>
            <div className="sidebar">Cart Items</div>
          </div>
        </main>
        <footer>All right is reserved.</footer>
       
  
      </div>
    )
  }
 
}

export default App;
