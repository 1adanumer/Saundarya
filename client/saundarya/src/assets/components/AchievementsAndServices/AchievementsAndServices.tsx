import React from 'react';
import './AchievementsAndServices.css';

const AchievementsAndServices: React.FC = () => {
  return (
    <div className="achievements-services">
      {/* Achievements Section */}
      <section className="achievements-section">
        <h2>Our Achievements</h2>
        <div className="achievements-grid">
          <div className="achievement-item">
            <img
              src="Background-1.jpg"
              alt="Achievement 1"
              className="achievement-img"
            />
            <h3>1M+ App Downloads</h3>
            <p>
              {/* Add achievement description here */}
            </p>
          </div>
          <div className="achievement-item">
            <img
              src="Background-2.jpg"
              alt="Achievement 2"
              className="achievement-img"
            />
            <h3>2M+ Bookings Completed</h3>
            <p>
              {/* Add achievement description here */}
            </p>
          </div>
          <div className="achievement-item">
            <img
              src="Background-3.jpg"
              alt="Achievement 3"
              className="achievement-img"
            />
            <h3>20+ Cities in India</h3>
            <p>
              {/* Add achievement description here */}
            </p>
          </div>
          <div className="achievement-item">
            <img
              src="Background-4.jpg"
              alt="Achievement 4"
              className="achievement-img"
            />
            <h3>4.5+ India’s Top Rated</h3>
            <p>
              {/* Add achievement description here */}
            </p>
          </div>
          <div className="achievement-item">
            <img
              src="Background-5.jpg"
              alt="Achievement 5"
              className="achievement-img"
            />
            <h3>3000+ Professionals</h3>
            <p>
              {/* Add achievement description here */}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-item">
            <img
              src="image-1.jpg"
              alt="Service 1"
              className="service-img"
            />
            <h3>Female Salon at Home</h3>
            <p>
              {/* Add service description here */}
            </p>
          </div>
          <div className="service-item">
            <img
              src="image-2.jpg"
              alt="Service 2"
              className="service-img"
            />
            <h3>Female Spa at Home</h3>
            <p>
              {/* Add service description here */}
            </p>
          </div>
          <div className="service-item">
            <img
              src="image-3.jpg"
              alt="Service 3"
              className="service-img"
            />
            <h3>Advance Facials</h3>
            <p>
              {/* Add service description here */}
            </p>
          </div>
          <div className="service-item">
            <img
              src="image-4.jpg"
              alt="Service 4"
              className="service-img"
            />
            <h3>Female Grooming</h3>
            <p>
              {/* Add service description here */}
            </p>
          </div>
          <div className="service-item">
            <img
              src="image-5.jpg"
              alt="Service 5"
              className="service-img"
            />
            <h3>Male Spa</h3>
            <p>
              {/* Add service description here */}
            </p>
          </div>
          <div className="service-item">
            <img
              src="image-6.jpg"
              alt="Service 6"
              className="service-img"
            />
            <h3>Hair Services</h3>
            <p>
              {/* Add service description here */}
            </p>
          </div>
          <div className="service-item">
            <img
              src="image-7.jpg"
              alt="Service 7"
              className="service-img"
            />
            <h3>Makeup at Home</h3>
            <p>
              {/* Add service description here */}
            </p>
          </div>
          <div className="service-item">
            <img
              src="image-8.jpg"
              alt="Service 8"
              className="service-img"
            />
            <h3>Pre Bridal</h3>
            <p>
              {/* Add service description here */}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AchievementsAndServices;