import React from "react";
import '../../home/styles/HomeFour.css';
import Group1Pic from '../../assets/images/Group1pic.svg';
import Group2Pic from '../../assets/images/Group2pic.svg';
import Group3Pic from '../../assets/images/Group3pic.svg';
const HomeFour = () => {
  return (  <div className="home-four">
    <div className="home-four1">
    <div className="home-four11">
      <p className="fast-easy">Fast & Easy</p>
      <p className="resort-booking">Get Your Favourite Resort Bookings</p>
      <div className="group">
        <div className="group-icon"><img src={Group1Pic} alt=""/></div>
        <div className="group-ptags">
          <p className="p1">Choose Destination</p>
          <p className="p2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
        </div>

      </div>
      <div className="group">
      <div className="group-icon"><img src={Group2Pic} alt=""/></div>
        <div className="group-ptags">
          <p className="p1">Check Availability</p>
          <p className="p2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
        </div>
      </div>
      <div className="group">
      <div className="group-icon"><img src={Group3Pic} alt=""/></div>
        <div className="group-ptags">
          <p className="p1">Let’s Go</p>
          <p className="p2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
        </div>
      </div>
      </div>
      <div className="home-four12">
        <div className="div111"></div>
        <div className="div222">
          <div className="div222-1"></div>
          <div className="div222-2"></div>
        </div>
      </div>
    </div>
    <div className="home-four2">
    <div className="crosses"></div>
    </div>
  </div>);
}
 
export default HomeFour;