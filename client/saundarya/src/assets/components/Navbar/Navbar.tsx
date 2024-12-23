import React from 'react';
import './Navbar.css';
import { FaUserCircle } from 'react-icons/fa';

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src="saunlogo.png" alt="Company Logo" className="navbar-logo" />
      </div>
      <div className="navbar-right">
        <FaUserCircle className="account-icon" />
        <span className="navbar-text">Saundarya Beauty Studio</span>
      </div>
    </div>
  );
};

export default Navbar;
