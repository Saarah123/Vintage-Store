import React from 'react';
import Shop from "./components/Shop";
import { Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';




export default function App() {
  
  return (
   <>
   <Navbar/>
   <Routes>
   <Route path = "/" element={ <Home/>}/>
     <Route path = "/Shop" element={ <Shop/>}/>
     <Route path="/SignIn" element={<SignIn/>}/>
     
     
    
   </Routes>
  
   
   
   </>
  )
};
