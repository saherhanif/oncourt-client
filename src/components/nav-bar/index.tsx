import React, { useState, useEffect } from "react";
import "./index.css";
import oncourtLogo from "./oncourtLogo-removebg-preview.png";

export default function Navbar(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
      

  const handleMenuToggle = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollPosition: number = window.scrollY;
      setIsScrolled(scrollPosition > 250);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBarClass: string = `nav-bar ${isMenuOpen ? "active" : ""} ${
    isScrolled ? "scrolled" : ""
  }`;

  return (
    <section id="header">
      <div
        className="header container"
        style={{ backgroundColor: isScrolled ? "#BED990" : "transparent" }}
      >
        <div className={navBarClass}>
          <div className="brand">
            <a href="/">
              <img
                className="oncourtLogo"
                src={oncourtLogo}
                alt="oncourtLogo"
              />
            </a>
          </div>
          <div className="nav-list">
            <div className="hamburger" onClick={handleMenuToggle}>
              <div className="bar"></div>
            </div>
            <ul className={isMenuOpen ? "active" : ""}>
              <li>
                <a href="/" onClick={handleMenuToggle}>
                  דף הבית
                </a>
              </li>
              <li>
                <a href="/about" onClick={handleMenuToggle}>
                  עלינו
                </a>
              </li>
              <li>
                <a href="/services" onClick={handleMenuToggle}>
                  שירותים
                </a>
              </li>
              <li>
                <a href="/contact" onClick={handleMenuToggle}>
                  צור קשר
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
