import React from "react";
import '../../home/styles/Partners.css';
import Partner1 from '../../assets/images/partner1.png';
import Partner2 from '../../assets/images/partner2-removebg-preview.png';
import Partner3 from '../../assets/images/partner3-removebg-preview.png';
import Partner4 from '../../assets/images/turkish-airlines-1-removebg-preview.png';
import Partner5 from '../../assets/images/partner5.png';
const Partners = () => {
  return ( 
  <div className="partners">
    <div className="partner1">
      <img className="partner1-pic" src={Partner1}/>
    </div>

    <div className="partner2">
      <img className="partner2-pic" src={Partner2}/>
    </div>

    <div className="partner3">
      <img className="partner3-pic" src={Partner3}/>
    </div>

    <div className="partner4">
      <img className="partner4-pic" src={Partner4}/>
    </div>

    <div className="partner5">
      <img className="partner5-pic" src={Partner5}/>
    </div>
    
  </div> );
}
 
export default Partners;