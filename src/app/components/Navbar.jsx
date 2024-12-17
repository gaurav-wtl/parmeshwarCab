'use client'
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white sticky top-0 shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/img/Parmeshwar Cabs.png"
            alt="Parmeshwar Cabs"
            className="h-12 w-14"
          />
          <Link href="/">
            <span className="text-xl font-semibold text-gray-800">
              Parmeshwar<span className="text-blue-600">Cabs</span>
            </span>
          </Link>
        </div>

        {/* Navbar links for large screens */}
        <div className="hidden lg:flex space-x-6">
          <Link href="/">
            <span className="text-gray-600 hover:text-blue-600 cursor-pointer">Home</span>
          </Link>
          <Link href="/about">
            <span className="text-gray-600 hover:text-blue-600 cursor-pointer">About</span>
          </Link>
          <Link href="/services">
            <span className="text-gray-600 hover:text-blue-600 cursor-pointer">Services</span>
          </Link>
          <Link href="#contactModal">
            <span className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 cursor-pointer">
              Contact Us
            </span>
          </Link>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 focus:outline-none"
          >
            <span className="navbar-toggler-icon">☰</span>
          </button>
        </div>
      </div>

      {/* Mobile Navbar (dropdown) */}
      <div
        className={`lg:hidden bg-white ${isMenuOpen ? 'block' : 'hidden'}`}
      >
        <div className="flex flex-col space-y-4 px-4 py-2">
          <Link href="/">
            <span className="text-gray-600 hover:text-blue-600 cursor-pointer">Home</span>
          </Link>
          <Link href="/about">
            <span className="text-gray-600 hover:text-blue-600 cursor-pointer">About</span>
          </Link>
          <Link href="/services">
            <span className="text-gray-600 hover:text-blue-600 cursor-pointer">Services</span>
          </Link>
          <Link href="#contactModal">
            <span className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 cursor-pointer">
              Contact Us
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
