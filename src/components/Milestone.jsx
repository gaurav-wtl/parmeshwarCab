// components/Milestone.js

import React from 'react';

const Milestone = () => {
  return (
    <section id="milestone" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8 text-center">
          {/* Milestone 1 */}
          <div className="flex-1 min-w-[200px] max-w-[250px]">
            <h1 className="text-4xl font-bold text-gray-800">9K+</h1>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          
          {/* Milestone 2 */}
          <div className="flex-1 min-w-[200px] max-w-[250px]">
            <h1 className="text-4xl font-bold text-gray-800">50L</h1>
            <p className="text-gray-600">Lines of road</p>
          </div>
          
          {/* Milestone 3 */}
          <div className="flex-1 min-w-[200px] max-w-[250px]">
            <h1 className="text-4xl font-bold text-gray-800">500</h1>
            <p className="text-gray-600">Total Rides</p>
          </div>
          
          {/* Milestone 4 */}
          <div className="flex-1 min-w-[200px] max-w-[250px]">
            <h1 className="text-4xl font-bold text-gray-800">380K</h1>
            <p className="text-gray-600">YouTube Subscribers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestone;
