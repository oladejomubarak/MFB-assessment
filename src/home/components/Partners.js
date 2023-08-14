import React from "react";
import '../../home/styles/Partners.css';
import Partner1 from '../../assets/images/partner1.png';
import Partner2 from '../../assets/images/partner2-removebg-preview.png';
import Partner3 from '../../assets/images/partner3-removebg-preview.png';
import Partner4 from '../../assets/images/partner4-removebg-preview.png';

import Partner5 from '../../assets/images/partner5.png';
const Partners = () => {
  return ( 
  <div className="partners">
    <div className="partner1">
      <img src={Partner1}/>
    </div>

    <div className="partner2">
      <img src={Partner2}/>
    </div>

    <div className="partner3">
      <img src={Partner3}/>
    </div>

    <div className="partner4">
      <img src={Partner4}/>
    </div>

    <div className="partner5">
      <img src={Partner5}/>
    </div>
    
  </div> );
}
 
export default Partners;