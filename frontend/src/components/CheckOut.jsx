import react from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

const CheckOut = () => {
    return(
<>
<div className='top'>
    <a href=" https://vintagedancer.com/1950s/1950s-fashion-women-get-look/ " target="_blank" rel="noopener noreferrer"><h3><b>ABOUT</b></h3></a>
     
    </div>
    <div className='body'>
<h2 sx={{margin:"auto"}}>CHECK OUT</h2>
<div className='form'>
    <input
     className='input'
    placeholder='NAME*'
    name="name" />

    <input
    className='input'
      placeholder='Mobile No.*'
      name="mobile" />

      <input
       className='input'
      placeholder='E-mail*'
      name="e-mail" />

      <input
       className='input'
      placeholder='Address*'
      name="address" />

<Link to ="/Payment"><button className='btn1'>Payment</button></Link>
</div>

    </div>

    <div className='footer'>
     <b>All right is reserved.</b>
    </div>
</>
    )
}

export default CheckOut;