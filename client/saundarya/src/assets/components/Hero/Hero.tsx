import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <div className="hero-section">
      {/* Video Background */}
      <div className="video-container">
        <video className="background-video" autoPlay loop muted>
          <source src="saunvideo.mp4" type="video/mp4" />
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
          At Saundarya Beauty Studio, we provide world-class beauty services that bring out the best version of you. From professional styling to personalized care, we ensure every client leaves feeling confident.
        </p>

        {/* Image and Points Section */}
        <div className="points-section">
          <div className="points-container">
            <div className="point">
              <img src="https://images.pexels.com/photos/5177995/pexels-photo-5177995.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Experienced Professionals" className="point-image" height={400} width={400}/>
              <p>Experienced Professionals</p>
            </div>
            <div className="point">
              <img src="https://images.pexels.com/photos/7755523/pexels-photo-7755523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="High-Quality Products" className="point-image" />
              <p>High-Quality Products</p>
            </div>
            <div className="point">
              <img src="https://images.pexels.com/photos/21316247/pexels-photo-21316247/free-photo-of-woman-with-mask-on-face-at-beautician.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Customized Services" className="point-image" />
              <p>Customized Services</p>
            </div>
            <div className="point">
              <img src="https://images.pexels.com/photos/4586717/pexels-photo-4586717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Affordable Packages" className="point-image" />
              <p>Affordable Packages</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;