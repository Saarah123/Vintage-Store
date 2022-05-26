import { bgcolor } from '@mui/system';
import react,{useEffect,useState} from 'react';
import "./Navbar.css";
import {Link} from "react-router-dom";
import axios from "axios"

const Cart = () => {


    const [data,setData] = useState([])

 useEffect(()=>{
    handlecart()
   
 },[])

 const handlecart=()=>{
    axios.get("https://sakshi-store.herokuapp.com/cart").then((res)=>{
        console.log(res)
        setData(res.data)
    }).catch((err)=>{
        console.log(err)
    })
 }


 const Delete=(id)=>{
     axios.delete(`https://sakshi-store.herokuapp.com/cart/${id}`).then((res)=>{
         
         handlecart()

     }).catch((err) => {
         console.log(err)
     })
 }
 const price  = data.reduce((acc,curr)=>{
        
    return Math.floor(acc + +curr.price)

},0)

console.log(price)



    return(
<>
<div className='top'>
    <a href=" https://vintagedancer.com/1950s/1950s-fashion-women-get-look/ " target="_blank" rel="noopener noreferrer"><h3><b>ABOUT</b></h3></a>
     
    </div>
    <div className='body1'>
        <div className='cart' >
    {data.map((e)=>(
        <div className='left'>
            <div   className="img">
                <h3>ITEM</h3>
                <img style={{width:"130px" , height:"220px",marginTop:"16%" }} src={e.image} alt="" />
            </div>
            <div className="details">
                <p1>{e.title}</p1><br/>
                <p1><b>{e.price}</b></p1>
            </div>
            <div style={{marginTop:"8%"}}>
            <button style={{marginTop:"5%", bgcolor:"blue"}} onClick={()=>Delete(e.id)}>REMOVE</button>
            </div>
</div>
    ))}


<div className='right'>
    <p1>PRICE</p1>
    <p1>QUANTITY</p1>
    <p1>TOTAL :- {price}</p1>

    
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