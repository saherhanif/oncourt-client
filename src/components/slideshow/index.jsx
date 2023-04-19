import React, { useEffect } from "react";
import ImageSlider from "../imageslider/index";
import "./index.css";
import img1 from "./images/slideshowImg1.png";
import img2 from "./images/slideshowImg2.png";
import img3 from "./images/slideshowImg3.png";

const Slideshow = () => {
  const slides = [
    { url: img1, title: "beach" },
    { url: img2, title: "boat" },
    { url: img3, title: "forest" },
  ];
  const containerStyles = {
    width: "cover",
    height: "700px",
    margin: "0 auto",
  };
  return (
    <div>
      <div style={containerStyles}>
        <ImageSlider slides={slides} itemClass="slider-item" />
      </div>
    </div>
  );
};

export default Slideshow;
