let currentSlide=0;
// Función para cambiar a la imagen anterior
export const prevSlide = () => {
    const carouselSlides = document.querySelector('.carousel-slide');
    const slideWidth = carouselSlides.querySelector('.carousel-slides').offsetWidth;
    currentSlide = (currentSlide - 1 + carouselSlides.childElementCount) % carouselSlides.childElementCount;
    carouselSlides.style.transform = `translateX(${-slideWidth * currentSlide}px)`;
  };
  
  // Función para cambiar a la siguiente imagen
  export const nextSlide = () => {
    const carouselSlides = document.querySelector('.carousel-slide');
    const slideWidth = carouselSlides.querySelector('.carousel-slides').offsetWidth;
    currentSlide = (currentSlide + 1) % carouselSlides.childElementCount;
    carouselSlides.style.transform = `translateX(${-slideWidth * currentSlide}px)`;
  };