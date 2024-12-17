'use client'

import React from 'react';
import Slider from 'react-slick';  // Importing the React Slick component

// Add slick-carousel CSS globally
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const HeroSection = () => {

  // Settings for the slider
  const settings = {
    dots: true,          // Enable navigation dots
    infinite: true,      // Infinite loop
    speed: 500,          // Animation speed in ms
    autoplay: true,      // Enable autoplay
    autoplaySpeed: 5000, // Slide interval in ms (15 seconds)
    slidesToShow: 1,     // Show 1 slide at a time
    slidesToScroll: 1    // Scroll 1 slide at a time
  };

  return (
    <div className="hero-section">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="slide slide1 bg-cover bg-center" style={{ backgroundImage: 'url(/img/team_1.jpg)' }}>
          <div className="container mx-auto px-4 py-24 text-white">
            <h6 className="uppercase text-lg">Welcome To Parmeshwar Cabs</h6>
            <h1 className="text-4xl font-semibold my-4">We Craft Natural <br />Experiences</h1>
            <a href="#book" className="btn btn-brand inline-block py-2 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700">Book Now</a>
            <a href="services.html" className="btn btn-outline-light inline-block py-2 px-6 ml-3 border-2 border-white text-white rounded-md hover:bg-white hover:text-gray-800">Our Services</a>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="slide slide2 bg-cover bg-center" style={{ backgroundImage: 'url(/img/your-image-path-2.jpg)' }}>
          <div className="container mx-auto px-4 py-24 text-white">
            <h6 className="uppercase text-lg">Welcome To Parmeshwar Cabs</h6>
            <h1 className="text-4xl font-semibold my-4">We Craft Natural <br />Experiences</h1>
            <a href="#book" className="btn btn-brand inline-block py-2 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700">Book Now</a>
            <a href="services.html" className="btn btn-outline-light inline-block py-2 px-6 ml-3 border-2 border-white text-white rounded-md hover:bg-white hover:text-gray-800">Our Services</a>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="slide slide3 bg-cover bg-center" style={{ backgroundImage: 'url(/img/your-image-path-3.jpg)' }}>
          <div className="container mx-auto px-4 py-24 text-white">
            <h6 className="uppercase text-lg">Welcome To Parmeshwar Cabs</h6>
            <h1 className="text-4xl font-semibold my-4">Travel By Cabs <br />To Goa</h1>
            <a href="#book" className="btn btn-brand inline-block py-2 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700">Book Now</a>
            <a href="services.html" className="btn btn-outline-light inline-block py-2 px-6 ml-3 border-2 border-white text-white rounded-md hover:bg-white hover:text-gray-800">Our Services</a>
          </div>
        </div>

        {/* Slide 4 */}
        <div className="slide slide4 bg-cover bg-center" style={{ backgroundImage: 'url(Goa_Airport.avif)' }}>
          <div className="container mx-auto px-4 py-24 text-white">
            <h6 className="uppercase text-lg">Welcome To Parmeshwar Cabs</h6>
            <h1 className="text-4xl font-semibold my-4">Travel From Goa <br />To Anywhere</h1>
            <a href="#book" className="btn btn-brand inline-block py-2 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700">Book Now</a>
            <a href="services.html" className="btn btn-outline-light inline-block py-2 px-6 ml-3 border-2 border-white text-white rounded-md hover:bg-white hover:text-gray-800">Our Services</a>
          </div>
        </div>

        {/* Slide 5 */}
        <div className="slide slide5 bg-cover bg-center" style={{ backgroundImage: 'url(/img/your-image-path-5.jpg)' }}>
          <div className="container mx-auto px-4 py-24 text-white">
            <h6 className="uppercase text-lg">Welcome To Parmeshwar Cabs</h6>
            <h1 className="text-4xl font-semibold my-4">Luxurious Cars For <br />Popular Destinations</h1>
            <a href="#book" className="btn btn-brand inline-block py-2 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700">Book Now</a>
            <a href="services.html" className="btn btn-outline-light inline-block py-2 px-6 ml-3 border-2 border-white text-white rounded-md hover:bg-white hover:text-gray-800">Our Services</a>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HeroSection;
