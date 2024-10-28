import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styling/RoomsPage.css';
import BackButton from './BackButton';

const RoomsPage = () => {
  const [likedRooms, setLikedRooms] = useState([]);
  const navigate = useNavigate();

  const toggleLike = (roomName) => {
    setLikedRooms((prevLikedRooms) =>
      prevLikedRooms.includes(roomName)
        ? prevLikedRooms.filter((name) => name !== roomName)
        : [...prevLikedRooms, roomName]
    );
  };
  const rooms = [
    {
      name: 'Cozy Haven Room',
      description:
        'Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.',
      price: 'Rs. 1000/night',
      imgUrl: 'https://www.kingsukhguesthouse.com/assets/small.jpg',
    },
    {
      name: 'Spacious Serenity Suite',
      description:
        'Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.',
      price: 'Rs. 1500/night',
      imgUrl: 'https://www.kingsukhguesthouse.com/assets/large.jpg',
    },
    {
      name: 'Elegant Escape Room',
      description:
        'Immerse yourself in elegance and calm in our Elegant Escape Room, perfect for a peaceful getaway with modern comforts.',
      price: 'Rs. 1200/night',
      imgUrl: 'https://www.kingsukhguesthouse.com/assets/recep.jpg',
    },
    {
      name: 'Deluxe Vista Room',
      description:
        'Experience sweeping views and deluxe accommodations in our Deluxe Vista Room, offering unmatched comfort and style.',
      price: 'Rs. 1800/night',
      imgUrl: 'https://www.kingsukhguesthouse.com/assets/room1.jpg',
    },
  ];

  return (
    <div className="rooms-container">
      <BackButton />
      <h1>Our Living Rooms</h1>
      <p>The Most Memorable Rest Time Starts Here.</p>
      <div className="rooms-grid">
        {rooms.map((room) => (
          <div key={room.name} className="room-card">
            <div className="room-image">
              <img src={room.imgUrl} alt={room.name} />
              <div className="room-icons">
                <button
                  onClick={() => toggleLike(room.name)}
                  className={`icon ${likedRooms.includes(room.name) ? 'liked' : ''}`}
                >
                  ❤️
                </button>
                <button className="icon">🔧</button>
                <button className="icon">⭐</button>
              </div>
            </div>
            <div className="room-info">
              <h2>{room.name}</h2>
              <p>{room.description}</p>
              <p className="room-price">Starting from {room.price}</p>
              <button className="btn book-now" onClick={() => navigate('/payment')}>Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomsPage;
