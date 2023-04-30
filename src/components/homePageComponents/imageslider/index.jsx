import { useState, useEffect } from "react";
import "./imageslider.scss";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      goToNext();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const slideStylesWidthBackground = {
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div className="slider">
      <div>
        <div onClick={goToPrevious} className="right-arrow">
          ❰
        </div>
        <div onClick={goToNext} className="left-arrow">
          ❱
        </div>
      </div>
      <div style={slideStylesWidthBackground} className="slide">
        <div className="mainText">
          <h1>תן למחבט לעשות את העניין.</h1>
          <p>אימון טניס לחובבים, מקצועי וכל הגילאים האחרים.</p>
        </div>
        <div className="dots-container">
          {slides.map((slide, slideIndex) => (
            <div
              className={`dot ${currentIndex === slideIndex ? "active" : ""}`}
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
            >
              ●
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
