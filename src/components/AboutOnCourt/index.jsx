import React from "react";
import "./index.scss";
import aboutImg from "./tennis-in-out-line-call.png";
import StyledLine from "../StyledLine";
export default function AboutOnCourt() {
  return (
    <div className="aboutOnCourtContainer">
      <div className="rightHalf">
        <h1>קצת על<br/> אונקורט</h1>
        <StyledLine/>
        <p>
          "מחבט לכל ילד" הינה האמירה שתמיד אני מדגיש אותה בכל מפגש עם אנשי חינוך
          או אנשי חברה ותרבות, בעזרת החינוך לספורט ולערכי הספורט אנו מחוללים
          שינוי חברתי עמוק אל עבר חברה טובה יותר. הטניס נחשב כספורט איכותי
          המאפיין מעמדי חברה גבוהים, אך אני סבור שזה לא רק, מטרתי העיקרית היא
          לתת הזדמנות לכל ילד לנסות בעצמו ולחוות ובכן להעצים את כישוריו ולהקנות
          לו ארגז כלים עשיר יותר
        </p>
      </div>
      <div className="leftHalf">
        <img src={aboutImg} alt="about" />
      </div>
    </div>
  );
}
