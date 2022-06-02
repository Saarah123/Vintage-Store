import { bgcolor } from '@mui/system';
import react,{useEffect,useState} from 'react';
import "./Navbar.css";
import {Link} from "react-router-dom";
import axios from "axios"

const Cart = () => {


    const [state,setState] = useState([])

//  useEffect(()=>{
//     handlecart()
   
//  },[])

 useEffect(() => {
    const cartdata = JSON.parse(localStorage.getItem("myworldCart"));

    setState([...cartdata]);
  }, []);

 
//  const price  = data.reduce((acc,curr)=>{
        
//     return Math.floor(acc + +curr.price)

// },0)

// console.log(price)
console.log(state);

const Delete = (index) => {
    state.splice(index, 1);
    localStorage.setItem("myworldCart", JSON.stringify(state));

    let newData = JSON.parse(localStorage.getItem("myworldCart"));
    setState([...newData]);
   
  };

  var sum = 0
    return(
<>

<div className='top'>
    <a href=" https://vintagedancer.com/1950s/1950s-fashion-women-get-look/ " target="_blank" rel="noopener noreferrer"><h3><b>ABOUT</b></h3></a>
     
    </div>
    <div className='body1'>
        <div className='cart' >
    {state.map((e)=>{

    
        sum += e.price;
       return<> <div className='left' key={e.id}>
            <div   className="img">
                <h3>ITEM</h3>
                <img style={{width:"130px" , height:"220px",marginTop:"16%" }} src={e.image} alt="" />
            </div>
            <div className="details">
                <p1>{e.title}</p1><br/>
                <p1><b>{e.price}</b></p1>
            </div>
            <div style={{marginTop:"8%"}}>
            <button onClick={()=>Delete(e.i)}>REMOVE</button>
            </div>
</div>
</>
})}


<div className='right'>
    <p1>PRICE</p1>
    <p1>QUANTITY</p1>
    <p1>TOTAL :- {sum}</p1>

    
</div>
        </div>
    </div>
    <Link to = {"/CheckOut"}><button className="btn">CHECK OUT</button></Link>


    <div className='footer'>
     <b>All right is reserved.</b>
    </div>
</>
    )
};

export default Cart;