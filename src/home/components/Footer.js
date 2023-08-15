import'../../home/styles/Footer.css';
import FooterImage from '../../assets/images/Footer-img.png';
import React from "react";
import LinkedIn from '../../assets/images/052-linkedin.svg';
import Messenger from '../../assets/images/025-messenger.svg';
import Twitter from '../../assets/images/096-twitter.svg';
import Twoo from '../../assets/images/097-twoo.svg';
import Arrow05 from '../../assets/images/Arrow 05.svg';
const Footer = () => {
  return ( 
    <div className="footer">
      <div className="footer1">
        <div className="footer1-section1">
          <div className='footer-section1-1'>
            <p className='travel-arrow'>Travel</p>
            <img className='arrow-travel' src= {Arrow05} alt='' />
          </div>
          <div className='footer-section1-2'>
            <p className='travel-help'> Travel helps companies manage payments easily.</p>
          </div>
          <div className='footer-section1-3'>
            <img className='social-media' src={LinkedIn} alt=''/>
            <img className='social-media' src={Messenger} alt=''/>
            <img className='social-media' src={Twitter} alt=''/>
            <img className='social-media' src={Twoo} alt=''/>
          </div>
        </div>
        <div className="footer1-section2">
          <p className='footer-p1'>Company</p>
          <p className='footer-p2'>About Us</p>
          <p className='footer-p2'>Careers</p>
          <p className='footer-p2'>Blog</p>
          <p className='footer-p2'>Pricing</p>
        </div>
        <div className="footer1-section2">
        <p className='footer-p1'>Destinations</p>
          <p className='footer-p2'>Maldives</p>
          <p className='footer-p2'>Los Angelas</p>
          <p className='footer-p2'>Las Vegas</p>
          <p className='footer-p2'>Torronto</p>
        </div>
        <div className="footer1-section2">
        <p className='footer-p1'> Join Our Newsletter</p>
        <div className='form-div'>
        <form >
          <input 
          placeholder='Your email address'
          />
          
        <button type='submit'>Subscribe</button>
        </form>
        </div>

        <p className='weekly-update'>
        *  Will send you weekly updates for 
        your better tour packages.
        </p>
        </div>
        <div className="footer-image-div">
          <img className='footer-image' src={FooterImage} alt=''/>
        </div>

      </div>
      <div className="footer2">
        <p className='footer-copyright'>
        Copyright @ Xpro 2022. All Rights Reserved.

        </p>
      </div>
    </div>
   );
}
 
export default Footer;