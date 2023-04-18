// Carousel.js
import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  return (
    <div className="carousel">
      <img src={images[currentIndex]} alt="carousel" className="carousel-image" />
      <button onClick={handlePrev} className="carousel-button prev">
        Prev
      </button>
      <button onClick={handleNext} className="carousel-button next">
        Next
      </button>
    </div>
  );
};

export default Carousel;