
import React from 'react'
import "./Navbar.css";
import "../index.css";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <div className='top'>
    <a href=" https://vintagedancer.com/1950s/1950s-fashion-women-get-look/ " target="_blank" rel="noopener noreferrer"><h3><b>ABOUT</b></h3></a>
     
    </div>

    <div className='body'>
    
    <img height="700px" src="https://i.pinimg.com/originals/5c/7a/51/5c7a515af18946223d48e930e4763508.jpg" alt="" ></img>
    <img height="700px"src="https://karlacolletto.com/site/wp-content/uploads/2015/03/CarrieBradshaw11.jpg " alt="" ></img>
    <img height="700px"src="https://cdn.dribbble.com/users/526105/screenshots/7165953/bw-large-dribbble_4x.png " alt="" ></img>
    </div>
    {/* <div className='footer'>
     <b>All right is reserved.</b>
    </div> */}
    </>
  )
};

export default Home;
