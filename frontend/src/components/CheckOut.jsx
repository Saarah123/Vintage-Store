import * as React from 'react';

import "./Navbar.css";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";

const CheckOut = () => {
    const navigate = useNavigate()
    // const handleSubmit=(e)=>{
    //     e.preventDefault();
    //         navigate("/Payment")

    //   }
   

    const [ formData , setFormData] = useState({
        name : "",
        mobile : "",
        email :"",
        address: ""
    })

      const HandleChange = (e) => {

        const {id,value} = e.target;
        setFormData({...formData , [id] : value})
      
    }

    const HandleSubmit = () => {

      
      console.log(formData.email)

      if(formData.name !=="" && formData.email !== "" && formData.mobile !== "" && formData.address !== ""   ){
       
        navigate("/Payment")
        //  localStorage.removeItem(formData);
      }
      
      else{
          alert("Invalid Credential !")
      }
  }

      
    return(
<>
<div className='top'>
    <a href=" https://vintagedancer.com/1950s/1950s-fashion-women-get-look/ " target="_blank" rel="noopener noreferrer"><h3><b>ABOUT</b></h3></a>
     
    </div>
    <div className='body'>
<h2 style={{marginLeft:"43%"}}><i>CHECK OUT</i></h2>
<form className='form' onSubmit={HandleSubmit}>
    <input
     className='input'
    placeholder='NAME*'
    id="name" 
    required
     onChange={HandleChange}
    />

    <input
    className='input'
      placeholder='Mobile No.*'
      id="mobile"
      onChange={HandleChange}
      required />

      <input
       className='input'
      placeholder='E-mail*'
      id="email"
      onChange={HandleChange}
      required />

      <input
       className='input'
      placeholder='Address*'
      id="address" 
      onChange={HandleChange}
      required
      />

{/* <Link to ="/Payment"><button className='btn1'>Payment</button></Link> */}

<input type="submit" value="Payment" onClick={HandleSubmit} />
</form>

    </div>

    <div className='footer'>
     <b>All right is reserved.</b>
    </div>
</>
    )
}

export default CheckOut;