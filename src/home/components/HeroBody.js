import React from "react";
import Vector1 from '../../assets/images/Vector 1.png'
import '../../../src/home/styles/HeroBody.css';
import Vec from '../../assets/images/Vector.svg'
import Elip1 from '../../assets/images/Ellipse 31.svg';
import Elip2 from '../../assets/images/Ellipse 32.svg';
import Elip3 from '../../assets/images/Ellipse 33.svg';
import Elip4 from '../../assets/images/Ellipse 34.svg';
import Elip5 from '../../assets/images/Ellipse 35.svg';
import Elip6 from '../../assets/images/Ellipse 36.svg';
import Elip7 from '../../assets/images/Ellipse 37.svg';
const HeroBody = () => {
  return (  <div className="hero-body">
    <div className="vector1">
      <img src={Vector1}/>
    </div>
    <div className="p-tag">
      <p>No matter where you’re <br></br>going to, we’ll take you <br></br>there</p>
    </div>
    <div className="rectangle2">
    <p className="whereTo">Where to?</p>
    <div className="vertical-rectangle"></div>
    <p>Travel Type</p>
    <img src={Vec} className="vec"/>
    <div className="vertical-rectangle">

    </div>
    <p>Duration</p>
    <img src={Vec} className="vec"/>
    <button>Submit</button>
    </div>
    <div className="elipses-people">
      <div className="elipses">
        <img className="elipsee" src={Elip1}/>
        <img className="elipse" src={Elip2}/>
        <img className="elipse" src={Elip3}/>
        <img className="elipse" src={Elip4}/>
        <img className="elipse" src={Elip5}/>
        <img className="elipse" src={Elip6}/>
        <img className="elipse" src={Elip7}/>
        <p className="elipse-content">+</p>
      </div>
      <div className="noOfPeople">
        <p>2,500 people booked Tommorowland Event in last 24 hours</p>
      </div>
    </div>


  </div>);
}
 
export default HeroBody;