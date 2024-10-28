import React from 'react';
import '../Styling/ContactPage.css';
import BackButton from './BackButton';
const ContactPage = () => {
  return (
    <div className="contact-page">
      <BackButton />
      <div className="contact-info">
        <h2>Contact Info</h2>
        <p><i className="fas fa-map-marker-alt"></i> Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</p>
        <p><i className="fas fa-envelope"></i> <a href="mailto:kkghosh0099@gmail.com">kkghosh0099@gmail.com</a></p>
        <p><i className="fas fa-phone"></i> +91 9007062180</p>
        <div className="social-icons">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
          <a href="https://www.instagram.com/kingsukhguesthouse/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          <a href="https://api.whatsapp.com/send?phone=919007062180" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
        </div>
      </div>

      <div className="contact-form">
        <form>
          <div>
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div>
          <div>
            <input type="email" placeholder="Email Address" required pattern=".+@gmail\.com" title="Must be a Gmail address" />
            <input type="text" placeholder="Mobile Number" required pattern="\d{10}" title="Enter a valid 10-digit mobile number" />
          </div>
          <textarea placeholder="Write your message here..." required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;




