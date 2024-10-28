import React, { useState } from 'react';
import '../Styling/GalleryPage.css';
import BackButton from './BackButton'; // Import the BackButton component
const GalleryPage = () => {
  const images = [
    { id: 1, url: 'https://www.kingsukhguesthouse.com/assets/ayodhya.webp', alt: 'Image 1' },
    { id: 2, url: 'https://www.kingsukhguesthouse.com/assets/baranti.webp', alt: 'Image 2' },
    { id: 3, url: 'https://www.kingsukhguesthouse.com/assets/out.jpg', alt: 'Image 3' },
    { id: 4, url: 'https://www.kingsukhguesthouse.com/assets/small.jpg', alt: 'Image 4' },
    { id: 5, url: 'https://www.kingsukhguesthouse.com/assets/large.jpg', alt: 'Image 5' },
    { id: 6, url: 'https://www.kingsukhguesthouse.com/assets/palash.webp', alt: 'Image 6' },
    { id: 7, url: 'https://www.kingsukhguesthouse.com/assets/flower.jpg', alt: 'Image 7' },
    { id: 8, url: 'https://www.kingsukhguesthouse.com/assets/mithonDam.webp', alt: 'Image 8' },
    { id: 9, url: 'https://www.kingsukhguesthouse.com/assets/room1.jpg', alt: 'Image 9' },
    { id: 10, url: 'https://www.kingsukhguesthouse.com/assets/recep.jpg', alt: 'Image 10' },
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImage(images[index].url);
    setCurrentIndex(index);
  };

  const handleClose = (e) => {
    if (e.target.className === 'lightbox' || e.target.className === 'close') {
      setSelectedImage(null);
    }
  };

  const showPrevImage = (e) => {
    e.stopPropagation();
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setSelectedImage(images[newIndex].url);
    setCurrentIndex(newIndex);
  };

  const showNextImage = (e) => {
    e.stopPropagation();
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setSelectedImage(images[newIndex].url);
    setCurrentIndex(newIndex);
  };
  return (
    <div className="gallery-container">
      <BackButton />
      <h1>Our Gallery</h1>
      <p>Explore stunning views and unforgettable memories captured at Kingsukh Guest House.</p>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={image.id} className="gallery-item" onClick={() => handleImageClick(index)}>
            <img src={image.url} alt={image.alt} />
          </div>
        ))}
      </div>
      
      {selectedImage && (
        <div className="lightbox" onClick={handleClose}>
          <span className="close">&times;</span>
          <img className="lightbox-image" src={selectedImage} alt="Enlarged" />
          <button className="prev" onClick={showPrevImage}>&#10094;</button>
          <button className="next" onClick={showNextImage}>&#10095;</button>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
