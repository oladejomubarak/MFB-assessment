import React from "react";
import '../../home/styles/HomeTwo.css';
import TourGuide from '../../assets/images/tour-guide.png';
import Travelling from '../../assets/images/travelling.png';
import Hands from '../../assets/images/hands.png';
import MedicalTeam from '../../assets/images/medical-team.png';
const HomeTwo = () => {
  return (  
    <div className="home-two">
      <div className="home-two-content">
      <div className="category">
        <p>CATEGORY</p>
      </div>
      <div className="best-services">
        <p>We Offer Best Services</p>
      </div>
      <div className="offered-services">
        <div className="offered-service">
          <div className="icon">
          <img className="tour-guide" src={TourGuide} alt=""/>
          <div className="rectangle1"></div>
          </div>
          
          <p className="title">Guided Tours</p>
          <p className="description">sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
        </div>
        <div className="offered-service">
          <div className="icon">
          <img className="travelling" src={Travelling} alt=""/>
          <div className="rectangle1"></div>
          </div>
          
          <p className="title">Best Flights Options</p>
          <p className="description">sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
        </div>
        <div className="offered-service">
          <div className="icon">
          <img className="hands" src={Hands} alt=""/>
          <div className="rectangle1"></div>
          </div>
          
          <p className="title">Religious Tours</p>
          <p className="description">sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
        </div>
        <div className="offered-service">
          <div className="icon">
          <img className="medical-team" src={MedicalTeam} alt=""/>
          <div className="rectangle1"></div>
          </div>
          
          <p className="title">Medical insurance</p>
          <p className="description">sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
        </div>
      </div>
      </div>
    </div>
  );
}
 
export default HomeTwo;