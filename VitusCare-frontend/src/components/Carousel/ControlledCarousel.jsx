import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <div className="carousel-container">
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="carousel-image"
            src="/images/c-banner-3.png"
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="/images/c-banner-1.png"
            alt="Second slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="/images/c-banner-2.png"
            alt="Third slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="/images/c-banner-4.png"
            alt="Fourth slide"
          />
          
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default DarkVariantExample;
