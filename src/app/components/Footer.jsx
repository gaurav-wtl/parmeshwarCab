// components/Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Footer Top */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Parmeshwar Cabs</h3>
            <p>
              The best drivers exhibit exceptional skill, safety consciousness,
              and a deep understanding of road etiquette, ensuring a smooth and
              secure journey for passengers.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick-Links</h3>
            <ul className="space-y-2">
              <li><a href="/index" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white">About</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-white">Services</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
              <li><a href="/booking" className="text-gray-300 hover:text-white">Booking</a></li>
            </ul>
          </div>

          {/* States */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">States</h3>
            <ul className="space-y-2">
              <li><a href="/booking" className="text-gray-300 hover:text-white">Maharashtra</a></li>
              <li><a href="/booking" className="text-gray-300 hover:text-white">Goa</a></li>
              <li><a href="/booking" className="text-gray-300 hover:text-white">Gujarat</a></li>
              <li><a href="/booking" className="text-gray-300 hover:text-white">Karnataka</a></li>
              <li><a href="/booking" className="text-gray-300 hover:text-white">Madhya Pradesh</a></li>
            </ul>
          </div>

          {/* Popular Cities */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Popular Cities</h3>
            <ul className="space-y-2">
              <li><a href="/booking" className="text-gray-300 hover:text-white">Pune To Goa</a></li>
              <li><a href="/booking" className="text-gray-300 hover:text-white">Pune To Dapoli</a></li>
              <li><a href="/booking" className="text-gray-300 hover:text-white">Pune To Alibaug</a></li>
              <li><a href="/booking" className="text-gray-300 hover:text-white">Pune To Ratnagiri</a></li>
              <li><a href="/booking" className="text-gray-300 hover:text-white">Pune To Sindhudurg</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Middle - Address */}
        <div className="my-8 border-t border-gray-700 pt-8">
          <h3 className="text-2xl font-semibold">Get in Touch</h3>
          <p>
            <strong>Address: </strong> Near JSPN NTC Mokarwadi Pune, Maharashtra India 411046.
            <br />
            <strong>Email: </strong> parmeshwarcabservices1717@gmail.com
            <br />
            <strong>Mobile: </strong> 09209592920
          </p>
        </div>

        {/* Social Media */}
        <div className="flex space-x-6 text-xl">
          <a href="#" className="text-gray-300 hover:text-white">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <i className="fab fa-pinterest"></i>
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p>&copy; Parmeshwar Cabs Inc. 2023 All rights reserved.</p>
          <p>
            Made with <i className="text-red-500 fas fa-heart"></i> in{' '}
            <a href="http://www.cobaztech.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              CobazTech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
