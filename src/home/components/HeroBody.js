import React from "react";
import Vector1 from '../../assets/images/Vector 1.png'
import '../../../src/home/styles/HeroBody.css';
import Vec from '../../assets/images/Vector.svg'
const HeroBody = () => {
  return (  <div className="hero-body">
    <div className="vector1">
      <img src={Vector1}/>
    </div>
    <div className="p-tag">
      <p>No matter where you’re <br></br>going to, we’ll take you <br></br>there</p>
    </div>
    <div className="rectangle2">
    <p>Where to?</p>
    <div className="vertical-rectangle"></div>
    <p>Travel Type</p>
    <img src={Vec} className="vec"/>
    <div className="vertical-rectangle"></div>
    <p>Duration</p>
    <img src={Vec} className="vec"/>
    <button>Submit</button>
    </div>
    <div className="elipses-people">
      <div className="elipses"></div>
      <div className="noOfPeople"></div>
    </div>


  </div>);
}
 
export default HeroBody;