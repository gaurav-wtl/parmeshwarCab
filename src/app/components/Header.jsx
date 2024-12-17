import React from 'react'

function Header() {


    return (
        <div className="top-nav bg-gray-800 text-white py-3" id="home">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div className="flex flex-col sm:flex-row sm:items-center text-lg-left">
                <p className="flex items-center mb-2 sm:mb-0">
                  <i className='bx bxs-envelope mr-2'></i>
                  parmeshwarcabservices1717@gmail.com
                </p>
                <p>
                  <a href="tel:09209592920" className="text-aliceblue flex items-center">
                    <i className='bx bxs-phone-call mr-2'></i>
                    09209592920
                  </a>
                </p>
              </div>
              <div className="social-icons flex space-x-4">
                <a href="#" className="text-white hover:text-blue-500">
                  <i className='bx bxl-facebook'></i>
                </a>
                <a href="#" className="text-white hover:text-blue-400">
                  <i className='bx bxl-twitter'></i>
                </a>
                <a href="#" className="text-white hover:text-pink-500">
                  <i className='bx bxl-instagram'></i>
                </a>
                <a href="#" className="text-white hover:text-red-500">
                  <i className='bx bxl-pinterest'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Header