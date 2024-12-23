import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <div className="hero-section">
      {/* Video Background */}
      <div className="video-container">
        <video className="background-video" autoPlay loop muted>
          <source src="video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay">
          <h1 className="hero-heading">Welcome to Saundarya Beauty Studio</h1>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="why-choose-section">
        <h2 className="why-choose-heading">Why Choose Saundarya Beauty Studio?</h2>
        <p className="why-choose-paragraph">
          At Saundarya Beauty Studio, we provide world-class beauty services that bring out the best version of you. From professional styling to personalized care, we ensure every client leaves feeling confident and beautiful.
        </p>

        {/* Image and Points Section */}
        <div className="points-section">
          <div className="points-container">
            <div className="point point-left">
              <p>Experienced Professionals</p>
              <div className="arrow"></div>
            </div>
            <div className="point point-left">
              <p>High-Quality Products</p>
              <div className="arrow"></div>
            </div>
          </div>

          <img
            src="image1.jpg"
            alt="Saundarya Beauty"
            className="center-image"
          />

          <div className="points-container">
            <div className="point point-right">
              <p>Customized Services</p>
              <div className="arrow"></div>
            </div>
            <div className="point point-right">
              <p>Affordable Packages</p>
              <div className="arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;