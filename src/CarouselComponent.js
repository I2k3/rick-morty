import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
  
const CarouselComponent = () => {
  const carouselStyle = {
    maxWidth: "800px",
    margin: "0 auto",
  };

  const imageStyle = {
    maxHeight: "400px",
  };

  return (
    <Carousel style={carouselStyle}>
      <div>
        <img src="rick-morty1.jpg" alt="rick-morty 1" style={imageStyle} />
        <p className="legend">Imagen 1</p>
      </div>
      <div>
        <img src="rick-morty2.jpg" alt="rick-morty 2" style={imageStyle} />
        <p className="legend">Imagen 2</p>
      </div>
      <div>
        <img src="rick-morty3.jpg" alt="rick-morty 3" style={imageStyle} />
        <p className="legend">Imagen 3</p>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
