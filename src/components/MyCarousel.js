import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../images/carousel_Image/img1.jpg";
import img2 from "../images/carousel_Image/img2.jpg";
import img3 from "../images/carousel_Image/img3.jpg";

const MyCarousel = () => {
  return (
    <>
      <Carousel fade={true} pause={false}>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={img1} alt="First slide" />
          <Carousel.Caption>
            <h3>ISPACE'S HAKUTO-R</h3>
            <p>UPCOMING LAUNCH</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={img2} alt="Third slide" />
          <Carousel.Caption>
            <h3>STARSHIP SELECTED BY NASA</h3>
            <p>UPCOMING LAUNCH</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={img3} alt="Third slide" />
          <Carousel.Caption>
            <h3>CRS-26 MISSION</h3>
            <p>RECENT LAUNCH</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default MyCarousel;
