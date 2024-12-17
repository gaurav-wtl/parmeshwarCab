'use client';
import { useState, useEffect } from 'react';
import emailjs from "emailjs-com"
import { useRouter } from 'next/navigation';

const SelectCar = () => {
  const [tripId, setTripId] = useState(null);
  const [carOptions, setCarOptions] = useState([]);
  const [selectCar, setSelectCar] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // For controlling modal visibility
  const [userDetails, setUserDetails] = useState({ name: "", email: "", mobileNumber: "" }); // User details state
  const router = useRouter();

  useEffect(() => {
    const tripIdFromLocalStorage = localStorage.getItem("trip");
    setTripId(tripIdFromLocalStorage);

    if (tripIdFromLocalStorage) {
      fetchCarOptions(tripIdFromLocalStorage);
    }
  }, []);

  const fetchCarOptions = async (tripId) => {
    try {
      const res = await fetch(`/api/${tripId}`);
      const data = await res.json();
      const type = localStorage.getItem("type");

      const updatedCarOptions = [
        {
          name: "Swift, Etios, Aura",
          image: "https://i.pinimg.com/1200x/0e/0d/a2/0e0da2818b70f0eed5f478bd4a893b13.jpg",
          luggageCapacity: "4 bags",
          price: "Rs 1928/-",
          features: ["USB Charging Cable", "Music System", "Fuel Type: CNG"]
        },
        {
          name: "Ertiga",
          image: "https://i.pinimg.com/originals/65/48/a5/6548a5a40e1f5ede3f550396e9b9e884.jpg",
          luggageCapacity: "6 bags",
          price: "Rs 1928/-",
          features: ["USB Charging Cable", "Music System", "Fuel Type: CNG"]
        },
        {
          name: "Kia Carens / Innova",
          image: "https://www.researchgate.net/publication/343690361/figure/fig12/AS:925423282167819@1597649512595/Figure3-3-KIA-CARENS-case-study.jpg",
          luggageCapacity: "6 bags",
          price: "Rs 1820/-",
          features: ["USB Charging Cable", "Music System", "Fuel Type: Diesel"]
        },
        {
          name: "Innova Crysta",
          image: "https://static.autox.com/uploads/2022/11/Innova-Hycross-1.jpg",
          luggageCapacity: "6 bags",
          price: "Rs 3100/-",
          features: ["USB Charging Cable", "Music System", "Fuel Type: Diesel"]
        }
      ];

      if (type === "Round") {
        updatedCarOptions[0].price = 12;
        updatedCarOptions[1].price = 15;
        updatedCarOptions[2].price = 18;
        updatedCarOptions[3].price = 20;
      } else {
        updatedCarOptions[0].price = data.price.pricing.HATCHBACK;
        updatedCarOptions[1].price = data.price.pricing.SEDAN;
        updatedCarOptions[2].price = data.price.pricing.MUV;
        updatedCarOptions[3].price = data.price.pricing.SUV;
      }

      setCarOptions(updatedCarOptions);
    } catch (error) {
      console.error("Error fetching car options:", error);
    }
  };

  const handleSelectCar = async (car) => {
    try {
      const tripId2 = localStorage.getItem("trip");
      const res = await fetch(`/api/vehicle/${tripId2}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ vehicle: car.name, price: car.price })
      });
      const data = await res.json();
      setSelectCar(data);
      console.log("Car selected:", data);

      // Open modal after car selection
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error selecting car:", error);
    }
  };

  const handleUserInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send user details via EmailJS
    const templateParams = {
      name: userDetails.name,
      email: userDetails.email,
      mobileNumber: userDetails.mobileNumber
    };

    try {
      // Send the email using EmailJS
      const response = await emailjs.send(
        'service_vrdsczw', // Service ID from EmailJS
        'template_74dvtz6', // Template ID from EmailJS
        templateParams,
        '9lQwfFeT4fUUR6D9o' // User ID from EmailJS
      );
      console.log('Email sent successfully:', response);

      // Optionally, close the modal after sending the email
      setIsModalOpen(false);

      router.push("/")
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className="container-fluid my-5 py-5 bg-white" id="book">
      <div className="container py-5">
        <div className="flex flex-col gap-12 lg:gap-20">
          <div className="flex-1 max-w-lg">
            <div className="details mb-8">
              <div className="mb-4">
                <h5 className="text-xl font-bold text-black border-b-4 border-black inline-block">
                  Online Cab Booking
                </h5>
                <h1 className="text-4xl font-extrabold text-black mt-4">
                  Make An Online Cab Booking For You And Your Family
                </h1>
              </div>
              <p className="text-base text-gray-700">
                Online cab booking is a convenient and popular way to arrange transportation services in many parts of the world...
              </p>
            </div>
          </div>

          <div className="flex-1">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <div className="text-center mb-8">
                <h1 className="text-xl font-semibold text-black">Book Cab Here</h1>
              </div>

              <div className="grid grid-cols-1 gap-8">
                {carOptions.map((car, index) => (
                  <div key={index} className="car-option flex flex-col justify-around sm:flex-row bg-white p-6 rounded-lg shadow-lg">
                    <div className="car-option-image mb-4 sm:mb-0 sm:mr-6">
                      <img src={car.image} alt={car.name} className="w-full h-auto max-w-[300px] mx-auto sm:mx-0 rounded-md" />
                    </div>
                    <div className="car-option-details mb-4 sm:mb-0">
                      <h4 className="text-xl font-semibold text-gray-800">{car.name}</h4>
                      <p className="text-gray-600">Luggage Capacity: {car.luggageCapacity}</p>
                      <ul className="list-disc pl-6 text-gray-600">
                        {car.features.map((feature, featureIndex) => (
                          <li key={featureIndex}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="car-option-price mb-4 sm:mb-0">
                      <p className="text-lg font-bold text-gray-800">Rs {car.price} / PER KM</p>
                      <p className="text-gray-600">Toll Parking/Driver Food: Extra</p>
                    </div>
                    <div className="w-full sm:w-auto">
                      <button
                        className="bg-green-500 text-white px-4 py-2 rounded-lg w-full sm:w-auto hover:bg-green-600"
                        onClick={() => handleSelectCar(car)}
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for user details */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
          <div className="bg-white p-8 rounded-lg w-96">
            <h2 className="text-2xl font-bold text-center mb-4">Enter Your Details</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={userDetails.name}
                  onChange={handleUserInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={userDetails.email}
                  onChange={handleUserInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="mobileNumber" className="block text-gray-700">Mobile Number</label>
                <input
                  type="tel"
                  id="mobileNumber"
                  name="mobileNumber"
                  value={userDetails.mobileNumber}
                  onChange={handleUserInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                  required
                />
              </div>
              <div className="flex justify-center">
                <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectCar;
