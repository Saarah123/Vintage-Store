import React from 'react';
import Shop from "./components/Shop";
import { Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import Payment from './components/Payment';





export default function App() {
  
  return (
   <>
   <Navbar/>
   <Routes>
   <Route path = "/" element={ <Home/>}/>
     <Route path = "/Shop" element={ <Shop/>}/>
     <Route path="/SignUp" element={<SignUp/>}/>
     <Route path="/Payment" element={<Payment/>}/>
     
     
     
    
   </Routes>
  
   
   
   </>
  )
};
