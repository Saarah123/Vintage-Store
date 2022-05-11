import React from "react";
import data from './data.json';

class App extends React.Component {
constructor(){
  super();
  this.state = {
    products: data.products,
    size:"",
    sorts:"",
  };
}


  render() {
    return (
      <div className="grid-container">
  
        <header>
          <a href = "/">React shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main"></div>
            <div className="sidebar"></div>
          </div>
        </main>
        <footer>All right is reserved.</footer>
       
  
      </div>
    )
  }
 
}

export default App;
