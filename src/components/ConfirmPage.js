import React from 'react';
import '../Styling/ConfirmPage.css'; 
const ConfirmPage = () => {
  return (
    <div className="confirm-container">
      <div className="confirmation-box">
        <img 
          src="https://gifsec.com/wp-content/uploads/2022/09/congrats-gif-35.gif" 
          alt="Congratulations" 
          className="congrats-gif" 
        />
        <h1>Congratulations!</h1>
        <p>Your booking has been confirmed.</p>
      </div>
    </div>
  );
};
export default ConfirmPage;