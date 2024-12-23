import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <h3>We Deliver in 5+ Cities in India</h3>
          <ul>
            <li>Mumbai</li>
            <li>Delhi</li>
            <li>Bangalore</li>
            <li>Pune</li>
            <li>Kolkata</li>
          </ul>
        </div>

        {/* Center Section */}
        <div className="footer-center">
          <img src="saunlogo.png" alt="Brand Logo" className="footer-logo" />
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <div className="footer-links">
            <h4>Important Links</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Our Services</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms-conditions">Terms & Conditions</a></li>
            </ul>
          </div>
          
          <div className="footer-newsletter">
            <h4>Subscribe to Our Newsletter</h4>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>© 2024 All rights reserved | Made with love in Bharat</p>
      </div>
    </footer>
  );
};

export default Footer;
