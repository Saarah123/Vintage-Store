import React from 'react';
import Home from "./components/Home";
import { Routes, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';


export default function App() {
  
  return (
   <>
   <Navbar/>
   <Routes>
   <Route path = "/" element={ <LandingPage/>}/>
     <Route path = "/Home" element={ <Home/>}/>
    
   </Routes>
  
   
   
   </>
  )
};
