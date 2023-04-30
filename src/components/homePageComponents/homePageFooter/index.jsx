import React from "react";
import "./homePageFooter.scss";
import footerHomeLogo from './oncourtLogo-removebg-preview.png'
import {ReactComponent as FacebookLogo} from './facebook-color-svgrepo-com.svg'
import { ReactComponent as InstagramLogo } from "./instagram-1-svgrepo-com.svg";
export default function HomePageFooter() {
  return (
    <div className="homePageFooterContainer">
      <div className="logoAndSocials">
        <img src={footerHomeLogo} alt="logo" />
        <div className="socials">
        <a href="https://www.facebook.com/ONCOURT10?mibextid=LQQJ4d">
        {/* <img src="https://img.icons8.com/color/48/null/facebook-new.png" alt="facebookIcon"/> */}
        <FacebookLogo className="facebookLogo"/>
        </a>
        <a href="https://instagram.com/on__court?igshid=YmMyMTA2M2Y=">
          <InstagramLogo/>
        </a>
        </div>
      </div>
      <div className="workHours">
        <h2>שעות פעילות</h2>
        <h3>ראשון - חמישי : 09:00 עד 20:00</h3>
        <h3>ששי : 09:00 עד 15:00</h3>
      </div>
      <div className="homeFooterContactUs">
        <h2>צור קשר</h2>
        <h3>מייל : on_court@outlook.com</h3>
        <h3>טלפון : 054-4695039 <br/> בדיע כרכבי</h3>
      </div>
    </div> 
  );
}




