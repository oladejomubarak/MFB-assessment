import React from "react";
import '../styles/Hero.css'
import HeroNavbar from "./HeroNavbar";
import HeroBody from "./HeroBody";
const Hero = () => {
  return ( <div className="hero">
      <div className="hero-bg-image">
        <HeroNavbar />
        <HeroBody />
      </div>
  </div> );
}
 
export default Hero;