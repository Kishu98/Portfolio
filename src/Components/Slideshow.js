import React from "react";
import { Slide } from "../../../../ki/node_modules/react-slideshow-image";
import "../css/Slideshow.css";
import pic1 from "../Images/James.jpg";
import pic2 from "../Images/Glitch.jpg";
import pic3 from "../Images/PROFILE.jpg";
import pic4 from "../Images/LineArt.jpg";
import pic5 from "../Images/Logan.jpg";

const slideImages = [pic1, pic2, pic3, pic4, pic5];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  },
};

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[3]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[4]})` }}></div>
        </div>
      </Slide>
    </div>
  );
};

export default Slideshow;
