import React from "react";
import "./ourClients.scss";
import StyledLine from "../StyledLine";
export default function OurClients() {
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
          <video controls>
            <source src="./sample-5s.mp4" type="video/mp4" />
          </video>
          <h2>מספר ספק במשרד החינוך 15918</h2>
        </div>
      </div>
    </div>
  );
}
