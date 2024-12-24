import React from "react";
import "./Works.css";
import { FaUsers, FaTrophy, FaClock, FaUserGraduate } from "react-icons/fa";

const Works: React.FC = () => {
  return (
    <div className="container">
      

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
            <p>Members in Team</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Works;
