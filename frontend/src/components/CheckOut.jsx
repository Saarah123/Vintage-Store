import react from 'react';
import "./Navbar.css";
import { Link, useNavigate } from 'react-router-dom';

const CheckOut = () => {
    const navigate = useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault();
            navigate("/Payment")

      }
      
    return(
<>
<div className='top'>
    <a href=" https://vintagedancer.com/1950s/1950s-fashion-women-get-look/ " target="_blank" rel="noopener noreferrer"><h3><b>ABOUT</b></h3></a>
     
    </div>
    <div className='body'>
<h2 style={{marginLeft:"43%"}}><i>CHECK OUT</i></h2>
<div className='form'>
    <input
     className='input'
    placeholder='NAME*'
    name="name" 
    required
    />

    <input
    className='input'
      placeholder='Mobile No.*'
      name="mobile"
      required />

      <input
       className='input'
      placeholder='E-mail*'
      name="e-mail"
      required />

      <input
       className='input'
      placeholder='Address*'
      name="address" 
      required
      />

{/* <Link to ="/Payment"><button className='btn1'>Payment</button></Link> */}

<input type="submit" value="Payment" onClick={handleSubmit} />
</div>

    </div>

    <div className='footer'>
     <b>All right is reserved.</b>
    </div>
</>
    )
}

export default CheckOut;