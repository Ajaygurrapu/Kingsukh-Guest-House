import React, { useState } from 'react';
import '../Styling/PaymentPage.css';
import { useNavigate } from 'react-router-dom'; // Correct usage of useNavigate

const PaymentPage = () => {
  const [prefix, setPrefix] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [address1, setAddress1] = useState('');
  const [zip, setZip] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('payNow');
  const [formError, setFormError] = useState('');

  // Initialize useNavigate
  const navigate = useNavigate();

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!email.endsWith('@gmail.com')) {
      setFormError('Email must end with @gmail.com');
      return;
    }

    if (!/^\d+$/.test(mobile)) {
      setFormError('Mobile number must contain only digits');
      return;
    }

    if (!/^\d+$/.test(zip)) {
      setFormError('Postal code must contain only digits');
      return;
    }

    // If "Pay Now", you can add logic to process card details here
    if (paymentMethod === 'payNow' && (!cardNumber || !expiry || !cvv || !nameOnCard)) {
      setFormError('Please fill in all card details');
      return;
    }

    // Clear previous error
    setFormError('');

    // Send confirmation email (implement your email sending logic here)
    console.log('Confirmation email sent to:', email);
    alert('Booking confirmed! A confirmation email has been sent to ' + email);

    // Navigate to ConfirmPage after successful submissio

    // Reset form
    resetForm();
  };

  const resetForm = () => {
    setPrefix('');
    setFirstName('');
    setLastName('');
    setMobile('');
    setEmail('');
    setCountry('');
    setAddress1('');
    setZip('');
    setCardNumber('');
    setExpiry('');
    setCvv('');
    setNameOnCard('');
    setPaymentMethod('payNow');
  };

  return (
    <div className="payment-container">
      <h1>Checkout</h1>
      <form className="payment-form" onSubmit={handleSubmit}>
        <div className="guest-details">
          <h2>Guest Details</h2>
          <div className="form-row">
            <div className="input-group">
              <label htmlFor="prefix">Prefix *</label>
              <select id="prefix" value={prefix} onChange={(e) => setPrefix(e.target.value)} required>
                <option value="">Select</option>
                <option value="Mr">Mr</option>
                <option value="Ms">Ms</option>
                <option value="Mrs">Mrs</option>
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="firstName">First Name *</label>
              <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" required />
            </div>
            <div className="input-group">
              <label htmlFor="lastName">Last Name *</label>
              <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" required />
            </div>
          </div>
          <div className="form-row">
            <div className="input-group">
              <label htmlFor="mobile">Mobile *</label>
              <input type="tel" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Mobile" required />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email Address *</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" required />
              <small>This is the email we will send your confirmation to.</small>
            </div>
          </div>
        </div>
        <div className="address-section">
          <h2>Address</h2>
          <div className="form-row">
            <div className="input-group">
              <label htmlFor="country">Country *</label>
              <select id="country" value={country} onChange={(e) => setCountry(e.target.value)} required>
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="United States">United States</option>
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="address1">Address 1 *</label>
              <input type="text" id="address1" value={address1} onChange={(e) => setAddress1(e.target.value)} placeholder="Address 1" required />
            </div>
            <div className="input-group">
              <label htmlFor="zip">Zip / Postal Code *</label>
              <input type="text" id="zip" value={zip} onChange={(e) => setZip(e.target.value)} placeholder="Zip / Postal Code" required />
            </div>
          </div>
        </div>

        <div className="payment-details">
          <h2>Payment</h2>
          <div className="form-row payment-options">
            <button 
              type="button" 
              className={`btn pay-now ${paymentMethod === 'payNow' ? 'active' : ''}`} 
              onClick={() => handlePaymentMethodChange('payNow')}
            >
              Pay Now
            </button>
            <button 
              type="button" 
              className={`btn pay-at-hotel ${paymentMethod === 'payAtHotel' ? 'active' : ''}`} 
              onClick={() => handlePaymentMethodChange('payAtHotel')}
            >
              Pay at Hotel
            </button>
          </div>
          {paymentMethod === 'payNow' && (
            <>
              <div className="form-row">
                <div className="input-group">
                  <label htmlFor="cardNumber">Card Number *</label>
                  <input 
                    type="text" 
                    id="cardNumber" 
                    value={cardNumber} 
                    onChange={(e) => setCardNumber(e.target.value)} 
                    placeholder="Card Number" 
                    required 
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="input-group">
                  <label htmlFor="expiry">Expiration Date (MM/YY) *</label>
                  <input 
                    type="text" 
                    id="expiry" 
                    value={expiry} 
                    onChange={(e) => setExpiry(e.target.value)} 
                    placeholder="MM/YY" 
                    required 
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="cvv">CVV *</label>
                  <input 
                    type="password" 
                    id="cvv" 
                    value={cvv} 
                    onChange={(e) => setCvv(e.target.value)} 
                    placeholder="CVV" 
                    required 
                  />
                  <small>What is this?</small>
                </div>
              </div>
              <div className="form-row">
                <div className="input-group">
                  <label htmlFor="nameOnCard">Name on Card *</label>
                  <input 
                    type="text" 
                    id="nameOnCard" 
                    value={nameOnCard} 
                    onChange={(e) => setNameOnCard(e.target.value)} 
                    placeholder="Name on Card" 
                    required 
                  />
                </div>
              </div>
            </>
          )}
        </div>
        <div className="acknowledgement">
          <label>
            <input type="checkbox" required /> I agree to the Booking Conditions.
          </label>
        </div>
        {formError && <p className="error-message">{formError}</p>}
        <button type="submit" className="btn btn-primary" onClick={() => navigate('/confirm')}>
        Confirm Booking</button>
      </form>
    </div>
  );
};

export default PaymentPage;








