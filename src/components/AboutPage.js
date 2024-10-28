import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../Styling/AboutPage.css';
import BackButton from './BackButton';

const AboutPage = () => {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <div className="about-container">
      <BackButton />
      <h1 className="about-title">The Best Holidays Start Here!</h1>
      <div className="about-content">
        <div className="about-image">
          <img
            src="https://www.kingsukhguesthouse.com/assets/out.jpg" 
            alt="Scenic view"
          />
        </div>
        <div className="about-description">
          <p>
            Embark on a tranquil journey at Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill,
            Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam.
          </p>
          <p>
            Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat
            beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. Explore the hidden gems of Purulia,
            creating memories that will linger long after your stay.
          </p>
        </div>
      </div>
      <div className="about-address">
        <h2>Contact Us</h2>
        <p className="highlighted">Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</p>
        <p className="highlighted">Phone: +91 9007062180</p>
      </div>
      <div className="about-footer">
        <button className="btn book-now" onClick={() => navigate('/rooms')}>BOOK NOW</button> {/* Added navigation */}
      </div>
    </div>
  );
};

export default AboutPage;
