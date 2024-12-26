import React from 'react';
import './AnnouncementBar.css';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const AnnouncementBar: React.FC = () => {
  return (
    <div className="announcement-bar">
      <div className="announcement-left">
        <FaPhone className="icon" />
        <span>+123 456 7890</span>
        <FaEnvelope className="icon" />
        <span>info@example.com</span>
      </div>
      <div className="announcement-right">
        <span>Get free gifts on booking above $999</span>
        <span>Upto 30% off on first order on New Year</span>
      </div>
    </div>
  );
};

export default AnnouncementBar;
