import React from "react";
import '../../home/styles/HomeThree.css';
import Love1 from '../../assets/images/love1.svg';
import Love2 from '../../assets/images/love2.svg';
import Love3 from '../../assets/images/love3.svg';
import Love4 from '../../assets/images/love4.png';
const HomeThree = () => {
  return ( 
    <div className="home-three">
      <div className="home-three1">
      <div className="love-pics">
        <p>Honeymoon Packages</p>
        <img className="love2" src={Love2} alt=""/>
        <img className="love1" src={Love1} alt=""/>
        <img className="love3" src={Love3} alt=""/>
        <div className="love4-div">
        <img className="love4" src={Love4} alt=""/>
        </div>
      </div>
      <div className="honeymoon-packages"></div>
      </div>
      <div className="home-three2">
      <div className="pluses">
        <div className="pluses-batch">
        <p className="white-plus">+</p><p className="white-plus">+</p><p className="white-plus">+</p><p className="white-plus">+</p><p className="red-plus">+</p>
        </div>
        <div className="pluses-batch">
        <p className="white-plus">+</p><p className="white-plus">+</p><p className="white-plus">+</p><p className="white-plus">+</p><p className="white-plus">+</p>
        </div>
        <div className="pluses-batch">
        <p className="white-plus">+</p><p className="white-plus">+</p><p className="blue-plus">+</p><p className="white-plus">+</p><p className="white-plus">+</p>
        </div>
        <div className="pluses-batch">
        <p className="white-plus">+</p><p className="red-plus">+</p><p className="white-plus">+</p><p className="white-plus">+</p><p className="white-plus">+</p>
        </div>
        <div className="pluses-batch">
        <p className="white-plus">+</p><p className="white-plus">+</p><p className="red-plus">+</p><p className="white-plus">+</p><p className="white-plus">+</p>
        </div>       
      </div>
      </div>

    </div>
   );
}
 
export default HomeThree;