import React, { useState } from 'react';
import './Navbar.css';
import { FaUserCircle } from 'react-icons/fa';
import Modal from 'react-modal';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

Modal.setAppElement('#root'); // Set the root element for accessibility

const Navbar: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement OTP sending functionality here
    console.log(`Sending OTP to ${phoneNumber}`);
    closeModal();
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src="saunlogo.png" alt="Company Logo" className="navbar-logo" />
      </div>
      <div className="navbar-right">
        <FaUserCircle className="account-icon" onClick={openModal} />
        <span className="navbar-text">Saundarya Beauty Studio</span>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="User Login"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>User Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <PhoneInput
              country={'us'}
              value={phoneNumber}
              onChange={(phone) => setPhoneNumber(phone)}
              inputProps={{
                name: 'phone',
                required: true,
                autoFocus: true,
              }}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        <p>We will send an OTP to this number. Enter and login.</p>
      </Modal>
    </div>
  );
};

export default Navbar;