import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Carousel from "./Carousel/Carousel";
import Tape from "./tape/Tape";
import Testimonial from "./testimonial/Testimonial";
import img from "../images/D.png";

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <Tape />
      <br />
      <span
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={img} alt=".." style={{width:"80%"}}/>
      </span>
      <br />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
