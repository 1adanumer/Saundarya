import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Cities Section */}
        <div className="footer-cities">
          <h3>We Deliver in 20+ Cities in India</h3>
          <p>Mumbai, Delhi, Bangalore, Pune, Kolkata, Chennai, Hyderabad, Ahmedabad, Jaipur, Surat, Lucknow, Kanpur, Nagpur, Indore, Thane, Bhopal, Visakhapatnam, Patna, Vadodara, Ghaziabad</p>
        </div>

        <hr className="footer-separator" />

        <div className="footer-content">
          {/* About Section */}
          <div className="footer-about">
            <h4>About Saundarya</h4>
            <p>Saundarya Beauty Academy is a premier beauty and wellness academy offering a wide range of courses and services to help you achieve your beauty goals. Our experienced instructors and state-of-the-art facilities ensure that you receive the best education and training in the industry.</p>
          </div>

          {/* Quick Links Section */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Our Services</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/courses">Courses</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>All rights reserved Saundarya Beauty Academy©</p>
      </div>
    </footer>
  );
};

export default Footer;