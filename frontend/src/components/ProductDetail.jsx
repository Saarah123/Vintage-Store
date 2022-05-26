import react, { useEffect,useState } from 'react';
import "./Navbar.css";
import { useParams } from 'react-router-dom';
import axios from "axios";
import {useNavigate}  from 'react-router-dom';

 export const ProductDetail = () => {

    const navigate = useNavigate()

const [data,setData]=useState({})
    const {id} = useParams()

    useEffect(()=>{
axios.get(`https://sakshi-store.herokuapp.com/products/${id}`).then((res)=>{
    console.log(res)
    setData(res.data)
}).catch((err)=>{
    console.log(err)
})
    },[])


    const handleCart = ()=>{

        const payload={
            title:data.title,
            image:data.image,
            description:data.description,
            price:data.price,
            category:data.category
            
        }
        axios.post("https://sakshi-store.herokuapp.com/cart",payload).then((res)=>{
            console.log(res)
            navigate("/Cart")
        }).catch((err)=>{
            console.log(err)
        })
    }

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

<button className='btn' onClick={handleCart}>Add to cart</button>


               </div>



           </div>

    </div>
    <div className='footer'>
     <b>All right is reserved.</b>
    </div>
        </>
    )
}