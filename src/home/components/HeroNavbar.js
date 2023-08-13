import '../styles/HeroNavbar.css';
import Arrow from '../../assets/images/Arrow 05.png';
import Vector from '../../assets/images/Vector.png';
import Union from '../../assets/images/Union.png';
import React, { useState} from 'react';
const HeroNavbar = () => {
const [union, setUnion] = useState(false);

const showUnion = ()=>{
  setUnion(true);
} 

const noUnion = ()=>{
  setUnion(false);
}   
  return ( 
    <div className="navbar">

      <div className="nav-section-one">
        <div className='travel'><h1>Travel</h1></div>
        <div className='arrow'><img
        src={Arrow}
        alt='' 
        /></div>
      </div>
      <div className="nav-section-two">
        <div className='home'>
        <p>Home</p>
        <div className='active-indicator'></div>
        {/* {activeIndicator && <div className='active-indicator'></div>} */}
        </div>
        <p className='about'>About</p>
        <div className='services' onMouseOver={showUnion} onMouseOut={noUnion}>
        <p>Services</p>
        <div className='vector-union'>
        <img  className='vector' src={Vector} alt='vector'/>
        {union && <div className='union'></div>}
        </div>
        </div>
        <p className='uc-packages'>Upcoming Packages</p>
      </div>
      <div className="nav-section-three">
          <h1>Get in Touch</h1>
      </div>
      
    </div>
   );
}
 
export default HeroNavbar;