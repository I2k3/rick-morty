// Image.js
import React from 'react';

const Image = ({ src, alt }) => {
  return <img src={src} alt={alt} className="carousel-image" />;
};

export default Image;