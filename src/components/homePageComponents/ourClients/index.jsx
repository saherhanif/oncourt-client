import React from "react";
import "./ourClients.scss";
import StyledLine from "../../StyledLine";
import ourClientsVideo from "./sample-5s.mp4";
import { useRef, useEffect } from "react";

export default function OurClients() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const videoOffset = video.offsetTop;
    const videoHeight = video.offsetHeight;
    const windowHeight = window.innerHeight;

    const handleScroll = () => {
      const scrollPos = window.scrollY;
      if (scrollPos >= videoOffset - windowHeight + videoHeight) {
        video.play();
      } else {
        video.pause();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="ourClientsContainer">
      <h1>בין בתי הספר והמוסדות</h1>
      <StyledLine />
      <div className="namesAndVideoContainer">
        <div className="clientsNames">
          <h2>בית ספר אחווה - חיפה</h2>
          <h2>בית ספר יוחנן הקדוש - חיפה</h2>
          <h2>בית ספר חיוואר - חיפה</h2>
          <h2>בית ספר נזירות - נצרת</h2>
        </div>
        <div className="clientsSectionVideo">
          <video ref={videoRef} controls>
            <source src={ourClientsVideo} type="video/mp4" />
          </video>
          <h2>מספר ספק במשרד החינוך 15918</h2>
        </div>
      </div>
    </div>
  );
}
