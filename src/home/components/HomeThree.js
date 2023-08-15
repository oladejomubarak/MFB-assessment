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
        <div className="honeymoon-packages-div">
        {/* <p>Honeymoon Packages</p> */}
        </div>
        <div className="love4-div">
        <img className="love4" src={Love4} alt=""/>
        </div> 
      </div>
      <div className="honeymoon-packages">
        <p>Honeymoon Specials</p>
        <p>Our Romantic Tropical Destinations</p>
        <p>Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium 
          internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut 
          ducimus illum aut optio quibusdam!</p>
        <button>View Packages</button>
      </div>
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
      <img className="love2" src={Love2} alt=""/>
        <img className="love1" src={Love1} alt=""/>
        <img className="love3" src={Love3} alt=""/>
    </div>
   );
}
 
export default HomeThree;