import Carousel from "react-bootstrap/Carousel";
import Photo from "../../assets/images/kitchen.jpg";
import Photo1 from "../../assets/images/living room.jpg";

function ImageSlider() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-full h-96 object-cover"
          src={Photo}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-full h-96 object-cover"
          src={Photo1}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-full h-96 object-cover"
          src={Photo}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageSlider;
