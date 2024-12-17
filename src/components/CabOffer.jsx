// components/CabOffers.js

import React from 'react';

const CabOffers = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10 text-center">
        <h6 className="text-lg text-gray-600">Parmeshwar Cabs</h6>
        <h1 className="text-4xl font-semibold mt-4">Cabs We Offer</h1>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://d2m3nfprmhqjvd.cloudfront.net/blog/20220228143039/ezgif.com-gif-maker-99-8.jpg"
            alt="Hatchback"
            className="w-full h-48 object-cover"
          />
          <a href="#book" className="block bg-blue-600 text-white text-center py-2">
            Book Now
          </a>
          <div className="p-4">
            <small className="text-gray-600">Hatchback</small>
            <h5 className="text-xl font-semibold mt-2">Swift/Celerio/WagonR/Glanza</h5>
            <ul className="text-sm text-gray-600 mt-2">
              <li>Seats: 4+1</li>
              <li>AC: Available</li>
              <li>Music System</li>
              <li>Fuel: Petrol/CNG</li>
              <li>Fare: 11rs/km</li>
            </ul>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://imgd.aeplcdn.com/664x374/n/cw/ec/45691/dzire-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80"
            alt="Sedan"
            className="w-full h-48 object-cover"
          />
          <a href="#book" className="block bg-blue-600 text-white text-center py-2">
            Book Now
          </a>
          <div className="p-4">
            <small className="text-gray-600">Sedan</small>
            <h5 className="text-xl font-semibold mt-2">Dzire/Aura/Amaze/Xcent</h5>
            <ul className="text-sm text-gray-600 mt-2">
              <li>Seats: 4+1</li>
              <li>AC: Available</li>
              <li>Music System</li>
              <li>Fuel: Petrol/Diesel/CNG</li>
              <li>Fare: 12rs/km</li>
            </ul>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://static.autox.com/uploads/cars/2018/08/maruti-suzuki-ciaz-20-aug-18.jpg"
            alt="Sedan Premium"
            className="w-full h-48 object-cover"
          />
          <a href="#book" className="block bg-blue-600 text-white text-center py-2">
            Book Now
          </a>
          <div className="p-4">
            <small className="text-gray-600">Sedan Premium</small>
            <h5 className="text-xl font-semibold mt-2">Ciaz/Honda-City</h5>
            <ul className="text-sm text-gray-600 mt-2">
              <li>Seats: 4+1</li>
              <li>AC: Available</li>
              <li>Music System</li>
              <li>Fuel: Petrol/Diesel</li>
              <li>Fare: 14rs/km</li>
            </ul>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://zaintravels.in/wp-content/uploads/2017/03/Ertiga-removebg-preview-2.png"
            alt="SUV"
            className="w-full h-48 object-cover"
          />
          <a href="#book" className="block bg-blue-600 text-white text-center py-2">
            Book Now
          </a>
          <div className="p-4">
            <small className="text-gray-600">SUV</small>
            <h5 className="text-xl font-semibold mt-2">Ertiga</h5>
            <ul className="text-sm text-gray-600 mt-2">
              <li>Seats: 6+1</li>
              <li>AC: Available</li>
              <li>Music System</li>
              <li>Fuel: Petrol/Diesel/CNG</li>
              <li>Fare: 15rs/km</li>
            </ul>
          </div>
        </div>

        {/* Card 5 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Toyota-Innova/1174/1544523709266/front-left-side-47.jpg"
            alt="MUV"
            className="w-full h-48 object-cover"
          />
          <a href="#book" className="block bg-blue-600 text-white text-center py-2">
            Book Now
          </a>
          <div className="p-4">
            <small className="text-gray-600">MUV</small>
            <h5 className="text-xl font-semibold mt-2">Innova</h5>
            <ul className="text-sm text-gray-600 mt-2">
              <li>Seats: 7+1</li>
              <li>AC: Available</li>
              <li>Music System</li>
              <li>Fuel: Petrol/Diesel</li>
              <li>Fare: 18rs/km</li>
            </ul>
          </div>
        </div>

        {/* Card 6 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://imgd.aeplcdn.com/1920x1080/n/cw/ec/140809/innova-crysta-exterior-left-front-three-quarter.jpeg?isig=0&q=80&q=80"
            alt="MUV+"
            className="w-full h-48 object-cover"
          />
          <a href="#book" className="block bg-blue-600 text-white text-center py-2">
            Book Now
          </a>
          <div className="p-4">
            <small className="text-gray-600">MUV+</small>
            <h5 className="text-xl font-semibold mt-2">Innova-Crysta</h5>
            <ul className="text-sm text-gray-600 mt-2">
              <li>Seats: 7+1</li>
              <li>AC: Available</li>
              <li>Music System</li>
              <li>Fuel: Petrol/Diesel</li>
              <li>Fare: 19rs/km</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CabOffers;
