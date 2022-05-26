import { bgcolor } from '@mui/system';
import react from 'react';
import "./Navbar.css";
import {Link} from "react-router-dom";


const Cart = () => {
    return(
<>
<div className='top'>
    <a href=" https://vintagedancer.com/1950s/1950s-fashion-women-get-look/ " target="_blank" rel="noopener noreferrer"><h3><b>ABOUT</b></h3></a>
     
    </div>
    <div className='body1'>
        <div className='cart' >
<div className='left'>
    <p1>ITEM</p1>
</div>
<div className='right'>
    <p1>PRICE</p1>
    <p1>QUANTITY</p1>
    <p1>TOTAL</p1>
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