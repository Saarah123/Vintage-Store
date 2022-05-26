import react, { useEffect,useState } from 'react';
import "./Navbar.css";
import { useParams } from 'react-router-dom';
import axios from "axios";
import {Link}  from 'react-router-dom';

 export const ProductDetail = () => {

const [data,setData]=useState({})
    const {id} = useParams()

    useEffect(()=>{
axios.get(`http://localhost:5050/products/${id}`).then((res)=>{
    console.log(res)
    setData(res.data)
}).catch((err)=>{
    console.log(err)
})
    },[])
console.log(data)
    return(
        <>
         <div className='top'>
    <a href=" https://vintagedancer.com/1950s/1950s-fashion-women-get-look/ " target="_blank" rel="noopener noreferrer"><h3><b>ABOUT</b></h3></a>
     
    </div>
  
    <div className='body1'>
           <div className='detail'>
               <div className='imgx'>
                   <img src={data.image} style={{width:"100%",height:"100%",objectFit:"cover"}} alt="" />
               </div>
               <div className='detail2'>
<h3>{data.title}</h3>
<p>{data.description}</p>
<h3>$ {data.price}</h3>

<Link to = "/Cart">
<button className='btn'>Add to cart</button>
</Link>


               </div>



           </div>

    </div>
    <div className='footer'>
     <b>All right is reserved.</b>
    </div>
        </>
    )
}