// components/Services.js

import React from 'react';

const Services = () => {
  return (
    <section id="services" className="text-center py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="row mb-8">
          <div className="col-12">
            <div className="intro">
              <h6 className="text-xl font-semibold text-gray-600">Our Services</h6>
              <p className="mx-auto mt-4 text-lg text-gray-500">
                Cab services are subject to local regulations, and drivers are often required to follow specific rules and guidelines to ensure the safety and well-being of passengers.
              </p>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* One-way Trip */}
          <div className="service bg-white p-6 rounded-lg shadow-lg">
            <img src="img/icon1.png" alt="One-way Trip" className="w-16 h-16 mx-auto"/>
            <h5 className="text-xl font-semibold text-gray-800 mt-4">One-way Trip</h5>
            <p className="text-gray-600 mt-2">
              A "one-way trip" refers to a journey where the traveler or participant goes from one point to another without returning to the starting point.
            </p>
            <a
              href="#book"
              className="inline-block mt-4 py-2 px-6 bg-orange-500 text-white text-center rounded-lg hover:bg-orange-600 transition-colors"
            >
              Book Now
            </a>
          </div>

          {/* Round Trip */}
          <div className="service bg-white p-6 rounded-lg shadow-lg">
            <img src="img/icon2.png" alt="Round Trip" className="w-16 h-16 mx-auto"/>
            <h5 className="text-xl font-semibold text-gray-800 mt-4">Round Trip</h5>
            <p className="text-gray-600 mt-2">
              A "round trip" typically refers to a journey that goes from one point to another and then back to the starting point.
            </p>
            <a
              href="#book"
              className="inline-block mt-4 py-2 px-6 bg-orange-500 text-white text-center rounded-lg hover:bg-orange-600 transition-colors"
            >
              Book Now
            </a>
          </div>

          {/* Rental */}
          <div className="service bg-white p-6 rounded-lg shadow-lg">
            <img src="img/icon3.png" alt="Rental" className="w-16 h-16 mx-auto"/>
            <h5 className="text-xl font-semibold text-gray-800 mt-4">Rental</h5>
            <p className="text-gray-600 mt-2">
              A "rental trip" refers to a journey or excursion that involves the use of rented equipment, vehicles, or accommodations.
            </p>
            <a
              href="#book"
              className="inline-block mt-4 py-2 px-6 bg-orange-500 text-white text-center rounded-lg hover:bg-orange-600 transition-colors"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
