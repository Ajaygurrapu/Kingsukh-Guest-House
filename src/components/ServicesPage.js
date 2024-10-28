import React from 'react';
import '../Styling/ServicePage.css';
import BackButton from './BackButton';

const ServicesPage = () => {
  return (
    <>
    <div className="services-container">
      <BackButton />
      <h1>Our Services</h1>
      <ul>
        <li>24-Hour Room Service</li>
        <li>Restaurant & Dining</li>
        <li>Tourist Guide Support</li>
        <li>Wellness & Recreation</li>
        <li>Airport Transfers</li>
      </ul>
    </div>
    </>
  );
};

export default ServicesPage;
