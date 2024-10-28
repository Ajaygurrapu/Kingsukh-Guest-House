import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import RoomsPage from './components/RoomsPage';
import GalleryPage from './components/GalleryPage';
import ContactPage from './components/ContactPage';
import PaymentPage from './components/PaymentPage';
import ConfirmPage from './components/ConfirmPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/rooms" element={<RoomsPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/" element={<HomePage />} />
        <Route path="/payment" element={<PaymentPage/>} />
        <Route path="/confirm" element={<ConfirmPage/>} />
      </Routes>
    </Router>
  );
}
export default App;  




