import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Carousel from './Carousel/Carousel'
import Tape from './tape/Tape'
import Testimonial from './testimonial/Testimonial'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Carousel/>
      <Tape/>
      <Testimonial/>
      <Footer/>
    </>
  )
}

export default Home
