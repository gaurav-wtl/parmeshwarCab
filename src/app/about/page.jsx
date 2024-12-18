import React from 'react'
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import About from '../components/About';

const page = () => {
  return (
    <div>
        <Header />
        <Navbar />
        <About />
        <Footer />

        {/* WhatsApp and Call Buttons */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-between p-4">
        {/* Call Button (Left) */}
        <a
          href="tel:09209592920"
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
        >
          <i className="bx bxs-phone-call text-3xl"></i>
        </a>

        
      </div>
    </div>
  )
}

export default page;