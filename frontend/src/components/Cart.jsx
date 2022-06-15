import { bgcolor } from '@mui/system';
import react,{useEffect,useState} from 'react';
import "./Navbar.css";
import {Link} from "react-router-dom";
import axios from "axios";
import {Box} from "@mui/system";
import { useSelector } from 'react-redux';

const Cart = () => {


    const [state,setState] = useState([])
    const Data = useSelector((store) => store.LoginFatch) 
    console.log(Data);
   
//  useEffect(()=>{
//     handlecart()
   
//  },[])

 useEffect(() => {
    const cartdata = JSON.parse(localStorage.getItem("myworldCart"));

    setState([...cartdata]);
  }, []);

  const quentityInc = (id) => {
    let temp = [...state];
    temp = temp.filter((e) => {
      if (e.id == id) {
        e.quantity = e.quantity + 1;
      }
      return e;
    });
    localStorage.setItem("myworldCart", JSON.stringify([...temp]));

    let newData = JSON.parse(localStorage.getItem("myworldCart"));
    setState([...newData]);
   
  };
  const quentityDic = (id) => {
    let temp = [...state];
    temp = temp.filter((e) => {

      if (e.id == id) {
          if(e.quantity >1){
        e.quantity = e.quantity - 1;
      }}
      return e;
    });
    localStorage.setItem("myworldCart", JSON.stringify([...temp]));

    let newData = JSON.parse(localStorage.getItem("myworldCart"));
    setState([...newData]);

  };
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

    
        sum += e.price*e.quantity;
       return<> <div className='left1' key={e.id}>
            {/* <div   className="lll"> */}
                
                <img style={{width:"130px" , height:"200px" }} src={e.image} alt="" />
            {/* </div> */}
            <div className="details1">
                <p1><b>{e.title}</b></p1><br/>
                <p1><b>${e.price}</b></p1>
            </div>
            <div style={{marginTop:"8%"}}>
            <button className = "kk" style={{ "borderRadius":"5px", "backgroundColor":"black" , "color":"white"}} onClick={()=>Delete(e.i)}>REMOVE</button>
            <div style={{"display":"flex", "gap":"10px"}}>
            <button className = "kk"style={{"width":"25px" ,"height":"20px" , "margin-top":"20px" , "borderRadius":"5px", "backgroundColor":"black" , "color":"white"}} onClick={()=>quentityInc(e.id)}>+</button>
            <h4>{e.quantity}</h4>
            <button className = "kk" style={{"width":"25px" ,"height":"20px","margin-top":"20px" ,"borderRadius":"5px", "backgroundColor":"black" , "color":"white"}}onClick={()=>quentityDic(e.id)}>-</button>   
            </div>
           
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

    <Link to = {Data.isLogged == true ? "/CheckOut" :"/SignUp"}><button className="btn">CHECK OUT</button></Link>


    <div className='footer'>
     <b>All right is reserved.</b>
    </div>
</>
    )
};

export default Cart;