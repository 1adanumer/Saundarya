import React from 'react';
import './AchievementsAndServices.css';

const AchievementsAndServices: React.FC = () => {
  return (
    <div className="achievements-services">
      {/* Achievements Section */}
      <section className="achievements-section">
        <h2>Our Achievements</h2>
        <div className="achievements-grid">
          {[1, 2, 3, 4, 5].map((item) => (
            <div className="achievement-item" key={item}>
              <img
                src={`Background-${item}.jpg`}
                alt={`Achievement ${item}`}
                className="achievement-img"
              />
              <h3>Achievement {item}</h3>
              <p>
                {/* Add achievement description here */}
                Description for Achievement {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          {[...Array(8).keys()].map((item) => (
            <div className="service-item" key={item}>
              <img
                src={`image-${item + 1}.jpg`}
                alt={`Service ${item + 1}`}
                className="service-img"
              />
              <h3>Service {item + 1}</h3>
              <p>
                {/* Add service description here */}
                Description for Service {item + 1}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AchievementsAndServices;