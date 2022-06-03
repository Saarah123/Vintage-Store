import react, { useEffect,useState } from 'react';
import "./Navbar.css";
import { useParams } from 'react-router-dom';
import axios from "axios";
import {useNavigate}  from 'react-router-dom';
import {Link} from 'react-router-dom';

 export const ProductDetail = () => {

    const navigate = useNavigate()

const [data,setData]=useState({})
    const {id} = useParams()

    const [state,setState] = useState([]);

    useEffect(()=>{
axios.get(`https://sakshivintage.herokuapp.com/products/${id}`).then((res)=>{
    console.log(res)
    setData({...res.data})
}).catch((err)=>{
    console.log(err)
})
    },[])
 useEffect(() => {
    axios.get("https://sakshivintage.herokuapp.com/cart").then((res)=>{
                console.log(res)
                setState([...res.data])
            }).catch((err)=>{
                console.log(err)
            })
       
        
 },[])
 console.log(state);
 
 const payload={
    title:data.title,
    image:data.image,
    description:data.description,
    price:data.price,
    category:data.category
    
}
     
const CartData = JSON.parse(localStorage.getItem("myworldCart")) || [];
const AddToCart = (e) => {
 let CheckbagSameItemCount = 0;
 for (let i = 0; i < CartData.length; i++) {
   if (e.id === CartData[i].id) {
     CheckbagSameItemCount += 1;
     break;
   }
 }
 if (CheckbagSameItemCount === 0) {
   CartData.push(e);
   localStorage.setItem("myworldCart", JSON.stringify(CartData));
 } else {
   alert("Item already added to Bag");
 }

 localStorage.setItem("myworldCart", JSON.stringify(CartData));
 
}; 

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
                <h2>{data.title}</h2>
                <p><b>{data.description}</b></p>
                <h3>$ {data.price}</h3>
<Link to={"/Cart"}>
<button className='btn' onClick={()=>AddToCart(data)}>Add to cart</button>
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