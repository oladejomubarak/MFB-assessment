import React from "react";
import '../../home/styles/HomeFour.css';
import Group1Pic from '../../assets/images/Group1pic.svg';
import Group2Pic from '../../assets/images/Group2pic.svg';
import Group3Pic from '../../assets/images/Group3pic.svg';
import Rectangle17 from '../../assets/images/Rectangle 17.png';
import Leaf from '../../assets/images/leaf 1.svg';
import Map1 from '../../assets/images/map 1.svg';
import Send2 from '../../assets/images/send 2.svg';
import Building from '../../assets/images/building 1.svg';
import Image32 from '../../assets/images/image 32.png';
import Airoplane from '../../assets/images/airoplane.png';
import Group3 from '../../assets/images/Group 3.svg';
import Heart from '../../assets/images/heart (6) 1.svg';


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
        <div className="div111">
          <div className="rec-div"><img className="rec-17" src={Rectangle17} alt="" /></div>
          <div className="rec-info">
            <p className="trip">Trip to Hawaii </p>
            <p className="june">14-29 June | by JR Martinax </p>
            <div className="mls-divs">
              <div className="mls-div"> <img className="mls" src={Map1} alt=""/></div>
              <div className="mls-div"> <img className="mls" src={Leaf} alt=""/></div>
              <div className="mls-div"> <img className="mls" src={Send2} alt="" /></div>
            </div>
            <div className="building-heart-div">
              <img className="building" src={Building} alt=""/>
              <p className="building-heart-ptag">60 people are interested</p>
              <img className="heart" src={Heart} alt=""/>
            </div>
          </div>
        </div>
        <div className="div222">
          <div className="div222-1">
            <img className="airoplane" src={Airoplane} alt="" />
          </div>
          <div className="div222-2">
            <div className="image32-div"><img className="image32" src={Image32} alt=""/></div>
            <div className="div222-2-info">
                 <p className="ongoing">Ongoing</p>
                 <p className="trip-to-rome">Trip to rome</p>
                 <p className="forty"><span className="forty-percent">40%</span>completed</p>
                 <img className="group-333" src={Group3} alt=""/>

            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="home-four2">
    <div className="crosses">
    <div className="crosses-batch">
        <p className="red-cross">+</p><p className="white-cross">+</p><p className="white-cross">+</p><p className="white-cross">+</p><p className="white-cross">+</p>
        </div>
        <div className="crosses-batch">
        <p className="white-cross">+</p><p className="white-cross">+</p><p className="white-cross">+</p><p className="white-cross">+</p><p className="white-cross">+</p>
        </div>
        <div className="crosses-batch">
        <p className="white-cross">+</p><p className="white-cross">+</p><p className="white-cross">+</p><p className="white-cross">+</p><p className="red-cross">+</p>
        </div>
        <div className="crosses-batch">
        <p className="white-cross">+</p><p className="white-cross">+</p><p className="white-cross">+</p><p className="red-cross">+</p><p className="white-cross">+</p>
        </div>
        <div className="crosses-batch">
        <p className="white-cros">+</p><p className="white-cross">+</p><p className="white-cross">+</p><p className="white-cross">+</p><p className="white-cross">+</p>
        </div>       

    </div>
    </div>
  </div>);
}
 
export default HomeFour;