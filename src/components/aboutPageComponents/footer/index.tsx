import React from "react";
import "./footer.scss";
import { ReactComponent as FacebookLogo } from "./facebook-color-svgrepo-com.svg";
import { ReactComponent as InstagramLogo } from "./instagram-1-svgrepo-com.svg";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="socials">
        <a href="https://www.facebook.com/ONCOURT10?mibextid=LQQJ4d">
          <FacebookLogo className="facebookLogo" />
        </a>
        <a href="https://instagram.com/on__court?igshid=YmMyMTA2M2Y=">
          <InstagramLogo />
        </a>
      </div>
    </div>
  );
}
