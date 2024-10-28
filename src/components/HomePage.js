import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Styling/HomePage.css';
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa'; // Import Font Awesome icons

const backgrounds = [
  'url(https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg)',
  'url(https://as1.ftcdn.net/v2/jpg/09/75/55/58/1000_F_975555866_sYj3rVJBuaOwNFJ1QJUB4qTbu4YyrXQu.jpg)',
  'url(https://as2.ftcdn.net/v2/jpg/08/23/86/07/1000_F_823860734_XP2lNVKywII7PkiK4Zr0yL1y46O9f2HS.jpg)',
  'url(https://as1.ftcdn.net/v2/jpg/09/94/60/76/1000_F_994607625_V0dtxhDejPMPtTj898jC2WPnTwjlOQzU.jpg)',
];

const galleryImages = [
  'https://www.kingsukhguesthouse.com/assets/ayodhya.webp',
  'https://www.kingsukhguesthouse.com/assets/baranti.webp',
  'https://www.kingsukhguesthouse.com/assets/out.jpg',
  'https://www.kingsukhguesthouse.com/assets/small.jpg',
  'https://www.kingsukhguesthouse.com/assets/large.jpg',
  'https://www.kingsukhguesthouse.com/assets/palash.webp',
  'https://www.kingsukhguesthouse.com/assets/flower.jpg',
  'https://www.kingsukhguesthouse.com/assets/mithonDam.webp',
  'https://www.kingsukhguesthouse.com/assets/room1.jpg',
  'https://www.kingsukhguesthouse.com/assets/recep.jpg',
];

const HomePage = () => {
  const [currentBackground, setCurrentBackground] = useState(0);
  const [form, setForm] = useState({
    arrival: '',
    departure: '',
    guests: 1,
    rooms: 1,
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const getTodayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgrounds.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const validateForm = () => {
    const arrivalDate = new Date(form.arrival);
    const departureDate = new Date(form.departure);
    return form.arrival !== '' && form.departure !== '' && departureDate > arrivalDate;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/rooms');
    } else {
      alert('Please ensure the departure date is after the arrival date.');
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div>
      <div
        className="home-container"
        style={{ backgroundImage: backgrounds[currentBackground], transition: 'background-image 1s ease-in-out' }}
      >
        <nav className="navbar">
          <button className="navbar-toggle" onClick={toggleMenu}>
            ☰
          </button>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
            <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
            <li><Link to="/rooms" onClick={toggleMenu}>Rooms</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
            <li><Link to="/gallery" onClick={toggleMenu}>Gallery</Link></li>
          </ul>
        </nav>
        <div className="content">
          <h1 className="heading">kingsukh Guest House</h1>
          <p className="description">Make Yourself At Home In Our Guest House </p>
          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="arrival">Arrival</label>
              <input
                type="date"
                id="arrival"
                name="arrival"
                value={form.arrival}
                onChange={handleInputChange}
                min={getTodayDate()}
              />
            </div>
            <div className="form-group">
              <label htmlFor="departure">Departure</label>
              <input
                type="date"
                id="departure"
                name="departure"
                value={form.departure}
                onChange={handleInputChange}
                min={form.arrival || getTodayDate()}
              />
            </div>
            <div className="form-group">
              <label htmlFor="guests">Guests</label>
              <input
                type="number"
                id="guests"
                name="guests"
                value={form.guests}
                onChange={handleInputChange}
                min="1"
                max="10"
              />
            </div>
            <div className="form-group">
              <label htmlFor="rooms">Rooms</label>
              <input
                type="number"
                id="rooms"
                name="rooms"
                value={form.rooms}
                onChange={handleInputChange}
                min="1"
                max="10"
              />
            </div>
            <button type="submit" className="btn book-now">Book Now</button>
          </form>
        </div>
      </div>
      <div className="gallery-section">
        <h2 className="gallery-heading">Our Gallery</h2>
        <div className="gallery-grid">
          {galleryImages.map((url, index) => (
            <div key={index} className="gallery-item">
              <img src={url} alt={`Scenic view ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            className="gmap_iframe"
            title="Location of Kingsukh Guest House"
            width="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=2048&amp;height=400&amp;hl=en&amp;q=Kingsukh Guest house&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
      {/* Footer Section */}
      <footer>
        <div className="footer-content">
          <div>
            <h3>Kingsukh Guest House</h3>
            <p>Discover a world of comfort, luxury, and adventure as you explore our curated selection of hotels, making every moment of your getaway truly extraordinary.</p>
            <button className="book-now">BOOK NOW</button>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Browse Destinations</Link></li>
              <li><Link to="/">Special Offers & Packages</Link></li>
              <li><Link to="/">Room Types & Amenities</Link></li>
              <li><Link to="/">Customer Reviews & Ratings</Link></li>
              <li><Link to="/">Travel Tips & Guides</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact Us</h4>
            <p>Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</p>
            <p>Email: kkghosh0099@gmail.com</p>
            <p>Phone: +91 9007062180</p>
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://www.instagram.com/kingsukhguesthouse/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
              <a href="https://api.whatsapp.com/send?phone=919007062180" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

