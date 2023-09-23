import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../images/A.jpg";
import img2 from "../../images/c.jpeg";
import img3 from "../../images/B.jpg";
import "./coursel.css";
function coursel() {
  return (
    <Carousel className="carousel-container" fade>
      <Carousel.Item>
        <img src={img1} alt="First slide" className="carousel-image" />
        <div className="d-none d-md-block">
          <div className="slider-text-inner js-fullheight">
            <div className="heading">
              <h1>
                <b>
                  <center>Find Your Right Lawyer With Us</center>
                </b>
                <br />
              </h1>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img2} alt="Second slide" className="carousel-image" />
        <div className="d-none d-md-block">
          <div className="slider-text-inner js-fullheight">
            <div className="heading">
              <h1>
                <b>
                  <center>Find Your Right Lawyer With Us</center>
                </b>
                <br />
              </h1>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img3} alt="Third slide" className="carousel-image" />
        <div className="d-none d-md-block">
          <div className="slider-text-inner js-fullheight">
            <div className="heading">
              <h1>
                <b>
                  <center>Find Your Right Lawyer With Us</center>
                </b>
                <br />
              </h1>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default coursel;
