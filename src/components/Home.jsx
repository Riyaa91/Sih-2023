import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Carousel from './Carousel/Carousel'
import Tape from './tape/tape'
import Testimonial from './testimonial/testimonial'

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
