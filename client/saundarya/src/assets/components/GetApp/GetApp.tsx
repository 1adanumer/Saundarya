import React, { useState } from "react";
import "./GetApp.css";

const GetApp: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle email submission logic here
  };

  return (
    <section className="get-app" style={{ backgroundColor: "brown" }}>
      <div className="overlay">
        <div className="get-app-container">
          {/* Left Side Image */}
          <div className="app-image">
            <img src="https://www.yesmadam.com/_next/image?url=%2Fshraddha-kapoor.png&w=750&q=75" alt="Girl" className="girl-img" />
          </div>

          {/* Right Side Form */}
          <div className="app-form">
            <h2>Get the App</h2>
            <p>Enter your email, we will send you the link.</p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                required
                className="email-input"
              />
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
            <div className="store-images">
              <img src="https://www.yesmadam.com/_next/image?url=%2Fplaystore.png&w=256&q=75" alt="Play Store" className="store-img" />
              <img src="https://www.yesmadam.com/_next/image?url=%2Fappstore.png&w=256&q=75" alt="App Store" className="store-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetApp;