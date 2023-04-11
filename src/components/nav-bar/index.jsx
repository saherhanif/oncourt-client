import React, { useState, useEffect } from 'react';
import './index.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 250);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navBarClass = `nav-bar ${isMenuOpen ? 'active' : ''} ${isScrolled ? 'scrolled' : ''}`;

  return (
    <section id="header">
      <div className="header container" style={{backgroundColor: isScrolled ? '#29323c' : 'transparent'}}>
        <div className={navBarClass}>
          <div className="brand">
            <a href="/">
              <img src="./oncourtLogo-removebg-preview.jpg" alt="oncourtLogo" width="50" height="60" />
            </a>
          </div>
          <div className="nav-list">
            <div className="hamburger" onClick={handleMenuToggle}>
              <div className="bar"></div>
            </div>
            <ul className={isMenuOpen ? 'active' : ''}>
              <li>
                <a href="/"  onClick={handleMenuToggle}>
                  דף הבית
                </a>
              </li>
              <li>
                <a href="/about"  onClick={handleMenuToggle}>
                  עלינו
                </a>
              </li>
              <li>
                <a href="/services"  onClick={handleMenuToggle}>
                  שירותים
                </a>
              </li>
              <li>
                <a href="/contact"  onClick={handleMenuToggle}>
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
