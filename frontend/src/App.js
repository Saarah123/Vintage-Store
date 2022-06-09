import React from 'react';
import{ Shop} from "./components/Shop";
import { Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import Payment from './components/Payment';
import { ProductDetail } from './components/ProductDetail';
import Cart from './components/Cart';
import CheckOut from './components/CheckOut';
import LogIn from './components/LogIn';
import Filter from './components/Filter';






export default function App() {
  
  return (
   <>
   <Navbar/>
   <Routes>
   <Route path = "/" element={ <Home/>}/>
     <Route path = "/Shop" element={ <Shop/>}/>
     <Route path="/SignUp" element={<SignUp/>}/>
     <Route path="/Payment" element={<Payment/>}/>
     <Route path="/ProductDetail/:id" element={<ProductDetail/>}/>
     <Route path="/CheckOut" element={<CheckOut/>}/>
     <Route path="/Cart" element={<Cart/>}/>
     <Route path="/LogIn" element={<LogIn/>}/>
     <Route  path='/category/:category'  element={<Filter/>}/>
     
     
     
    
   </Routes>
  
   
   
   </>
  )
};
