import'../../home/styles/Footer.css';
import FooterImage from '../../assets/images/Footer-img.png';
import React from "react";
const Footer = () => {
  return ( 
    <div className="footer">
      <p>footer</p>
      <div className="footer1">
        <div className="footer1-section1"></div>
        <div className="footer1-section2"></div>
        <div className="footer1-section2"></div>
        <div className="footer1-section2"></div>
        <div className="footer1-image">
          <img src={FooterImage} alt=''/>
        </div>

      </div>
      <div className="footer2">
      </div>
    </div>
   );
}
 
export default Footer;