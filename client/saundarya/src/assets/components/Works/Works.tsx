import React from "react";
import "./Works.css";
import { FaUsers, FaTrophy, FaClock, FaUserGraduate } from "react-icons/fa";

const Works: React.FC = () => {
  return (
    <div className="container">
      {/* How It Works Section */}
      <section className="how-it-works">
        <h2 className="section-title">How It Works</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-icon">💡
            </div>

            <p>Find Areawise vendors</p>
          </div>
          <div className="step">
            <div className="step-icon">📝</div>
            <p>Check Works & Reviews</p>
          </div>
          <div className="step">
            <div className="step-icon">📚</div>
            <p>Book Dates</p>
          </div>
          <div className="step">
            <div className="step-icon">🎓</div>
            
            <p>Enjoy Treatment</p>
          </div>
        </div>
      </section>

      {/* Our Achievements Section */}
      <section className="our-achievements">
        <h2 className="section-title">Our Achievements</h2>
        <div className="achievements-container">
          <div className="achievement">
            <FaUsers className="achievement-icon" />
            <h3>10k+</h3>
            <p>Happy Customers</p>
          </div>
          <div className="achievement">
            <FaTrophy className="achievement-icon" />
            <h3>15+</h3>
            <p>Awards Won</p>
          </div>
          <div className="achievement">
            <FaClock className="achievement-icon" />
            <h3>20,000+</h3>
            <p>Hours Worked</p>
          </div>
          <div className="achievement">
            <FaUserGraduate className="achievement-icon" />
            <h3>5k+</h3>
            <p>Graduates</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Works;
