import React, { useState } from "react";
import "./GetApp.css";

const GetApp: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="get-app">
      <div className="overlay">
        <div className="get-app-container">
          {/* Text Section */}
          <div className="app-text">
            <h2>Get Our App on Play Store and App Store</h2>
            <div className="buttons">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="app-button"
              >
                Download on Play Store
              </a>
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                className="app-button"
              >
                Download on App Store
              </a>
            </div>

            <p className="toggle-line" onClick={toggleDescription}>
              Get our exclusive services at your home
            </p>

            {isExpanded && (
              <div className="description">
                <p>
                With our app, you can book beauty services and get exclusive offers,
all from the comfort of your home. Experience the best services
delivered right to your doorstep. Download now and get started.
Discover a wide range of beauty treatments tailored to your needs.
Enjoy seamless booking and secure payment options.
Stay updated with the latest trends and tips in the beauty industry.
Join our community and share your experiences with others.
Get personalized recommendations based on your preferences.
Take advantage of special discounts and loyalty rewards.
Our professional beauticians are just a tap away.
Experience convenience and luxury with our top-rated services.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetApp;
