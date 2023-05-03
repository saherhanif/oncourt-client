import React from "react";
import { useRef } from "react";
import "./mainServices.scss";
import servicesVideo from "./sample_1280x720.mp4";

export default function MainServices() {
  const videoRef = useRef(null);

  return (
    <div className="mainServicesContainer">
      <div className="rectangle service1">
        <div className="contentHalf">
          <h1>מפגשים אישיים</h1>
          <p>מפגש 1 על 1 זה נבנה עבור ספורטאים בודדים</p>
          <hr />
        </div>
        <div className="videoHalf">
          <video ref={videoRef} autoplay muted loop playsinline>
            <source src={servicesVideo} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="rectangle service2">
        <div className="videoHalf">
          <video ref={videoRef} autoplay muted loop playsinline>
            <source src={servicesVideo} type="video/mp4" />
          </video>
        </div>
        <div className="contentHalf">
          <h1>מפגשים לזוגות </h1>
          <p>מפגש 1 על 1 זה נבנה עבור ספורטאים בודדים</p>
          <hr />
        </div>
      </div>
      <div className="rectangle service3">
        <div className="contentHalf">
          <h1>מפגשים קבוצתיים</h1>
          <p>מפגשים עם קבוצות של שמונה אנשים</p> <hr />
        </div>
        <div className="videoHalf">
          <video ref={videoRef} autoplay muted loop playsinline>
            <source src={servicesVideo} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="rectangle service4">
        <div className="videoHalf">
          <video ref={videoRef} autoplay muted loop playsinline>
            <source src={servicesVideo} type="video/mp4" />
          </video>
        </div>
        <div className="contentHalf">
          <h1>מפגשים אישיים</h1>
          <p>מפגש 1 על 1 זה נבנה עבור ספורטאים בודדים</p>
          <hr />
        </div>
      </div>
    </div>
  );
}
