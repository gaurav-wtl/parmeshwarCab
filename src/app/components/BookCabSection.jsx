'use client';

import { useState, useEffect } from 'react';
import {useRouter} from 'next/navigation';

const BookCabSection = () => {
  const [tripType, setTripType] = useState('');
  const [cabType, setCabType] = useState('');
  const [passengers, setPassengers] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [returnTime, setReturnTime] = useState('');
  const [isRoundTrip, setIsRoundTrip] = useState(false);
  const [routes, setRoutes] = useState([]); // To hold the fetched routes
  const [loading, setLoading] = useState(true); // For loading state
  const router = useRouter();

  const handleTripTypeChange = (e) => {
    const value = e.target.value;
    setTripType(value);
    setIsRoundTrip(value === 'Round');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Gather all the necessary data for the trip
    const tripData = {
      tripType,
      passengers,
      route: cabType,
      date: departureDate,
      time: departureTime,
      returnDate: returnDate || null,
      returnTime: returnTime || null,
    };

    try {
      const response = await fetch('/api/trip', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tripData),
      });

      const result = await response.json();

      if (response.ok) {
        
        localStorage.setItem("trip", result.trip._id);

        router.push("/cars");
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Error creating trip:', error);
      alert('An error occurred while creating the trip.');
    }
  };

  // Fetch routes from API
  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const response = await fetch('/api/trip');
        const data = await response.json();
        
        // Assuming that the price data has a "route" field in each object
        if (data && Array.isArray(data)) {
          const routeList = data.map(item => item.route); // Get the route from each object
          setRoutes(routeList);
        }
      } catch (error) {
        console.error('Error fetching routes:', error);
      } finally {
        setLoading(false); // Set loading state to false after fetching data
      }
    };

    fetchRoutes();
  }, []);

  return (
    <div className="container-fluid my-5 py-5 bg-white" id="book">
      <div className="container py-5">
        <div className="row gx-5 flex flex-col gap-10 lg:flex-row justify-between">
          {/* Left Column */}
          <div className="col-lg-6 mb-5 mb-lg-0 max-w-[700px]">
            <div className="details">
              <div className="mb-4">
                <h5 className="inline-block text-uppercase border-b-4 border-black text-xl">
                  Online Cab Booking
                </h5>
                <h1 className="display-4 text-4xl font-bold text-black">
                  Make An Online Cab Booking For You And Your Family
                </h1>
              </div>
              <p className="text-black mb-5 text-base">
                Online cab booking is a convenient and popular way to arrange transportation services in many parts
                of the world. It typically involves using a website or a mobile app to book a ride with a transportation
                service provider, such as a taxi, ride-sharing service, or a car rental agency. The app matches the user
                with an available driver nearby. Users create an account and provide necessary information like their name,
                phone number, and payment details. Users can see details about the driver, the vehicle, and an estimated
                arrival time. Once a driver accepts the ride, the user receives confirmation with the driver's name, vehicle
                details, and estimated fare. Users can track the driver's location in real-time.
              </p>
            </div>
          </div>

          {/* Right Column (Booking Form) */}
          <div className="col-lg-6">
            <div className="fixed-booking-form bg-gray-300 p-5 rounded-lg">
              <div className="text-center p-5 rounded-md shadow-lg max-w-3xl mx-auto">
                <h1 className="mb-4 text-xl font-semibold text-black">Book Cab Here</h1>
                <div className="choostrip mb-4">
                  <select
                    className="form-select bg-light border-0 p-3 w-full rounded-md"
                    id="tripType"
                    name="tripType"
                    value={tripType}
                    onChange={handleTripTypeChange}
                  >
                    <option value="">Choose Trip-Type</option>
                    <option value="One-Way">One-Way Tours</option>
                    <option value="Round">Round Tours</option>
                    <option value="Rental">Rental</option>
                  </select>
                </div>

                <form id="cabForm" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Cab Route Select */}
                    <div>
                      <select
                        className="form-select bg-light border-0 p-3 w-full rounded-md"
                        style={{ height: '55px' }}
                        id="cabType"
                        name="cabType"
                        value={cabType}
                        onChange={(e) => setCabType(e.target.value)}
                        disabled={loading}
                      >
                        <option value="">Select Route</option>
                        {!loading && routes.length > 0 ? (
                          routes.map((route, index) => (
                            <option key={index} value={route}>
                              {route}
                            </option>
                          ))
                        ) : (
                          <option value="" disabled>Loading routes...</option>
                        )}
                      </select>
                    </div>

                    {/* Passengers Select */}
                    <div>
                      <select
                        className="form-select bg-light border-0 p-3 w-full rounded-md"
                        style={{ height: '55px' }}
                        id="Passengers"
                        name="Passengers"
                        value={passengers}
                        onChange={(e) => setPassengers(e.target.value)}
                      >
                        <option value="">Select Passengers</option>
                        <option value="3">1-3</option>
                        <option value="6">3-6</option>
                        <option value="8">6-8</option>
                      </select>
                    </div>

                    {/* Departure Date */}
                    <div>
                      <label htmlFor="departureDate" className="block text-black">Date</label>
                      <input
                        type="date"
                        id="departureDate"
                        className="form-control bg-light border-0 p-3 w-full rounded-md"
                        style={{ height: '55px' }}
                        name="departureDate"
                        value={departureDate}
                        onChange={(e) => setDepartureDate(e.target.value)}
                      />
                    </div>

                    {/* Departure Time */}
                    <div>
                      <label htmlFor="departureTime" className="block text-black">Time</label>
                      <input
                        type="time"
                        id="departureTime"
                        className="form-control bg-light border-0 p-3 w-full rounded-md"
                        style={{ height: '55px' }}
                        name="departureTime"
                        value={departureTime}
                        onChange={(e) => setDepartureTime(e.target.value)}
                      />
                    </div>

                    {/* Return Date and Time (Visible for Round Trip only) */}
                    {isRoundTrip && (
                      <>
                        <div>
                          <label htmlFor="returnDate" className="block text-white">Return Date</label>
                          <input
                            type="date"
                            id="returnDate1"
                            className="form-control bg-light border-0 p-3 w-full rounded-md"
                            style={{ height: '55px' }}
                            name="returnDate1"
                            value={returnDate}
                            onChange={(e) => setReturnDate(e.target.value)}
                          />
                        </div>

                        <div>
                          <label htmlFor="returnTime" className="block text-white">Return Time</label>
                          <input
                            type="time"
                            id="returnTime"
                            className="form-control bg-light border-0 p-3 w-full rounded-md"
                            style={{ height: '55px' }}
                            name="returnTime"
                            value={returnTime}
                            onChange={(e) => setReturnTime(e.target.value)}
                          />
                        </div>
                      </>
                    )}

                    {/* Book Now Button */}
                    <div className="col-span-2">
                      <button
                        className="btn bg-blue-600 text-white font-semibold py-3 w-full rounded-md"
                        type="submit"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCabSection;
