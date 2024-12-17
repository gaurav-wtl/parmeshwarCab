// components/About.js

import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8">
          {/* Left Column */}
          <div className="lg:w-1/2 space-y-8">
            {/* Info Box 1 */}
            <div className="flex items-start space-x-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYQYj3Z9eQvJK0OZiyLmMxwVtjPkOLN49Na3dEZdp1gkeN1c7HX3bxdqY2ZNgxrJ7-6p4&usqp=CAU"
                alt="Best Drivers"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h5 className="text-xl font-semibold">Best Drivers</h5>
                <p className="text-gray-600">
                  The best drivers exhibit exceptional skill, safety consciousness,
                  and a deep understanding of road etiquette, ensuring a smooth and
                  secure journey for passengers.
                </p>
              </div>
            </div>

            {/* Info Box 2 */}
            <div className="flex items-start space-x-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYQYj3Z9eQvJK0OZiyLmMxwVtjPkOLN49Na3dEZdp1gkeN1c7HX3bxdqY2ZNgxrJ7-6p4&usqp=CAU"
                alt="Unique Experiences"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h5 className="text-xl font-semibold">Unique Experiences</h5>
                <p className="text-gray-600">
                  Unique cab experiences can range from luxurious rides in high-end
                  vehicles to themed taxis that offer entertainment and local insights,
                  adding a touch of novelty and excitement to your journey.
                </p>
              </div>
            </div>

            {/* Info Box 3 */}
            <div className="flex items-start space-x-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYQYj3Z9eQvJK0OZiyLmMxwVtjPkOLN49Na3dEZdp1gkeN1c7HX3bxdqY2ZNgxrJ7-6p4&usqp=CAU"
                alt="Safe Rides"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h5 className="text-xl font-semibold">Safe Rides</h5>
                <p className="text-gray-600">
                  Safe rides prioritize passenger well-being by implementing rigorous
                  driver vetting, vehicle inspections, and real-time tracking, ensuring
                  peace of mind for travelers throughout their journey.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (Images) */}
          <div className="lg:w-1/2 flex flex-col space-y-4">
            <img
              src="https://imgd.aeplcdn.com/664x374/n/cw/ec/45951/amaze-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80"
              alt="Car 1"
              className="w-full h-full object-cover rounded-lg"
            />
            <img
              src="https://imgd.aeplcdn.com/0x0/n/cw/ec/51435/innova-crysta-exterior-right-front-three-quarter-3.jpeg?q=80"
              alt="Car 2"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
