'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const AdminPanel = () => {
  const [routes, setRoutes] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  // Check login status on initial load
  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      setIsLoggedIn(true);
    }
  }, []);

  // Fetch pricing data from the API
  const fetchPrices = async () => {
    try {
      const response = await fetch('/api/trip'); // Update this path according to your API setup
      const data = await response.json();
      console.log(data);
      if (data) {
        setRoutes(data || []);
      }
    } catch (error) {
      console.error('Error fetching prices:', error);
    }
  };

  // Handle Delete Button Click
  const handleDelete = async (id, row) => {
    try {
      const response = await fetch(`/api/admin/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();

      if (response.ok) {
        row.remove();
        alert('Route deleted successfully.');
      } else {
        alert(result.message || 'Error deleting route');
      }
    } catch (error) {
      console.error('Error deleting route:', error);
      alert('Error deleting route');
    }
  };

  // Login handler
  const handleLogin = async (e) => {
    e.preventDefault();

    // Dummy login logic for the example (replace with your actual authentication logic)
    if (username === 'admin' && password === 'admin123') {
      // Store auth token (could be JWT or other method)
      localStorage.setItem('authToken', 'your-auth-token-here');
      setIsLoggedIn(true);
      setErrorMessage('');
    } else {
      setErrorMessage('Invalid credentials');
    }
  };

  // Fetch prices when the component mounts and user is logged in
  useEffect(() => {
    if (isLoggedIn) {
      fetchPrices();
    }
  }, [isLoggedIn]);

  return (
    <div className="container mx-auto px-4 py-6">
      {!isLoggedIn ? (
        // Login form
        <div className="max-w-md mx-auto p-4 border border-gray-300 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Admin Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-gray-600">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Enter Username"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-600">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Enter Password"
                required
              />
            </div>
            {errorMessage && (
              <div className="text-red-500 text-sm text-center">{errorMessage}</div>
            )}
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-200"
            >
              Login
            </button>
          </form>
        </div>
      ) : (
        // Admin Panel (routes and pricing)
        <div>
          <h2 className="text-2xl font-bold text-center text-gray-800">Parmeshwar Cab Admin</h2>
          <br />
          <Link href="/admin/addroute">
            <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-200" id="addButton">
              Add Route & Pricing
            </button>
          </Link>

          <div className="route-table-container mt-6 overflow-x-auto shadow-lg rounded-lg border border-gray-200">
            <table className="w-full table-auto text-sm text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-gray-600">Route</th>
                  <th className="py-3 px-4">Hatchback</th>
                  <th className="py-3 px-4">Sedan</th>
                  <th className="py-3 px-4">MUV</th>
                  <th className="py-3 px-4">SUV</th>
                </tr>
              </thead>
              <tbody>
                {routes.length > 0 ? (
                  routes.map((route) => {
                    const { _id, route: routeName, pricing } = route;
                    const vehicleTypes = ['HATCHBACK', 'SEDAN', 'MUV', 'SUV'];
                    return (
                      <tr key={_id} className="border-b border-gray-200">
                        <td className="py-3 px-4">{routeName}</td>
                        {vehicleTypes.map((type) => (
                          <td key={type} className="py-3 px-4">Rs. {pricing[type] || 'N/A'}</td>
                        ))}
                        <td className="py-3 px-4">
                          <button
                            className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition duration-200"
                            onClick={(e) => handleDelete(_id, e.target.closest('tr'))}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="6" className="py-3 px-4 text-center text-gray-500">No routes available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
