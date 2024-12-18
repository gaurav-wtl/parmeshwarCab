'use client';
import { useState } from 'react';

const page = () => {
  const [routeName, setRouteName] = useState('');
  const [hatchbackPrice, setHatchbackPrice] = useState('');
  const [sedanPrice, setSedanPrice] = useState('');
  const [muvPrice, setMuvPrice] = useState('');
  const [suvPrice, setSuvPrice] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create pricing data
    const pricing = {
      HATCHBACK: hatchbackPrice,
      SEDAN: sedanPrice,
      MUV: muvPrice,
      SUV: suvPrice,
    };

    const data = { route: routeName, pricing };

    try {
      const response = await fetch('/api/admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccessMessage('Route and pricing added successfully!');
        setRouteName('');
        setHatchbackPrice('');
        setSedanPrice('');
        setMuvPrice('');
        setSuvPrice('');
        setErrorMessage('');
      } else {
        setErrorMessage(result.message || 'Error adding route and pricing.');
        setSuccessMessage('');
      }
    } catch (error) {
      setErrorMessage('Error adding price entry: ' + error.message);
      setSuccessMessage('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <header className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Parmeshwar Cab Admin</h1>
      </header>

      {/* Display success or error message */}
      {successMessage && <div className="text-green-600 mb-4">{successMessage}</div>}
      {errorMessage && <div className="text-red-600 mb-4">{errorMessage}</div>}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Route Name */}
        <div className="flex flex-col">
          <label htmlFor="route-name" className="text-lg text-gray-700">Route Name</label>
          <input
            type="text"
            id="route-name"
            name="route-name"
            value={routeName}
            onChange={(e) => setRouteName(e.target.value)}
            placeholder="Enter Route Name"
            required
            className="mt-2 p-3 border border-gray-300 rounded-md"
          />
        </div>

        <h2 className="text-2xl text-gray-800">Vehicle Pricing</h2>

        {/* Vehicle Pricing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="hatchback" className="text-lg text-gray-700">Hatchback</label>
            <input
              type="text"
              id="hatchback"
              name="hatchback"
              value={hatchbackPrice}
              onChange={(e) => setHatchbackPrice(e.target.value)}
              placeholder="Enter Hatchback Pricing"
              required
              className="mt-2 p-3 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="sedan" className="text-lg text-gray-700">Sedan</label>
            <input
              type="text"
              id="sedan"
              name="sedan"
              value={sedanPrice}
              onChange={(e) => setSedanPrice(e.target.value)}
              placeholder="Enter Sedan Pricing"
              required
              className="mt-2 p-3 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="muv" className="text-lg text-gray-700">MUV</label>
            <input
              type="text"
              id="muv"
              name="muv"
              value={muvPrice}
              onChange={(e) => setMuvPrice(e.target.value)}
              placeholder="Enter MUV Pricing"
              required
              className="mt-2 p-3 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="suv" className="text-lg text-gray-700">SUV</label>
            <input
              type="text"
              id="suv"
              name="suv"
              value={suvPrice}
              onChange={(e) => setSuvPrice(e.target.value)}
              placeholder="Enter SUV Pricing"
              required
              className="mt-2 p-3 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300">
          Submit
        </button>
      </form>
    </div>
  );
};

export default page;
