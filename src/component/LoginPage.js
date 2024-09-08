import React, { useState, useEffect } from 'react';
import formLogo from "../images/girlGreeting.jpg";
import carousel1 from "../images/jobQuest.jpeg";
import carousel2 from "../images/company.jpeg";
import carousel3 from "../images/deliveryBoy.jpeg";
import { Link } from 'react-router-dom';

const images = [
  {
    src: carousel1,
    title: "Elevate Your Business",
    description:
      "Discover top talent and streamline your hiring process with JobQuest. Connect with skilled delivery personnel to enhance your company’s efficiency.",
  },
  {
    src: carousel2,
    title: "Find the Right Company",
    description:
      "Be a part of a dynamic team with JobQuest. Whether you're a company looking for reliable delivery staff or a delivery professional seeking opportunities, we're here to connect you.",
  },
  {
    src: carousel3,
    title: "Happy Deliveries, Happy Customers",
    description:
      "Join our network of satisfied delivery professionals. At JobQuest, we value your happiness and success as much as you do. Start your journey with us today!",
  },
];

const LoginPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const handleNext = () => {
    if (!isSliding) {
      setIsSliding(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsSliding(false);
      }, 500); // Adjust this duration to match the CSS transition duration
    }
  };

  const handlePrev = () => {
    if (!isSliding) {
      setIsSliding(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        setIsSliding(false);
      }, 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row font-varela h-screen bg-[#FAF9F6] shadow-lg lg:m-16 m-5">
      {/* Left Section with Carousel */}
      <div className="md:w-1/2 w-full relative overflow-hidden font-varela hidden md:block">
        <div className="h-full w-full relative flex transition-transform font-varela duration-500 ease-in-out"
             style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-none w-full h-full bg-cover font-varela bg-center relative"
              style={{ backgroundImage: `url(${image.src})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h2 className="text-4xl font-varela font-bold">{image.title}</h2>
                <p className="mt-4 text-lg font-varela max-w-md">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute inset-y-1/2 left-4">
          <button
            onClick={handlePrev}
            className="text-white text-2xl focus:outline-none font-varela"
          >
            &#10094;
          </button>
        </div>
        <div className="absolute inset-y-1/2 right-4">
          <button
            onClick={handleNext}
            className="text-white text-2xl focus:outline-none font-varela"
          >
            &#10095;
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 w-full flex flex-col items-center justify-center bg-white p-8 md:p-12 rounded-none shadow-lg">
        <div className="text-center mb-8 mt-8">
          <img
            src={formLogo}
            alt="Avatar"
            className="mx-auto mb-4 rounded-full w-28 h-28 border-2 border-gray-300"
          />
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-gray-800 font-varela">Hello Again!</h2>
          <p className="text-gray-600 text-sm md:text-base font-varela">
            Welcome back. Ready to explore new opportunities or post your latest job listing?
          </p>
        </div>

        {/* Form */}
        <form className="w-full max-w-sm md:max-w-md">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 font-varela" htmlFor="email">
              Email address
            </label>
            <input
              className="shadow appearance-none font-varela border rounded w-full py-2 md:py-3 px-3 md:px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-4 md:mb-6">
            <label className="block text-gray-700 font-varela text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border font-varela rounded w-full py-2 md:py-3 px-3 md:px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
            <div className="flex items-center justify-between">
              <label className="flex items-center text-gray-700 text-sm md:text-base">
                <input type="checkbox" className="mr-2 leading-tight font-varela" />
                Remember me
              </label>
              <a href="#" className="text-blue-500 text-xs md:text-sm hover:underline font-varela">Recovery password</a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 font-varela hover:bg-blue-600 text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded focus:outline-none focus:shadow-outline w-64 flex justify-center"
              type="button"
            >
              Login
            </button>
          </div>
        </form>

        {/* Alternative Login Options */}
        <div className="mt-6 md:mt-8 flex w-full justify-between space-x-4">
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 md:py-3 px-4 md:px-6 border border-gray-400 rounded shadow flex items-center justify-center w-1/2">
            <i className="fa-brands fa-google text-black mr-2 flex justify-center items-center font-varela"></i>
            Login with Google
          </button>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 md:py-3 px-4 md:px-6 border border-gray-400 rounded shadow flex items-center justify-center w-1/2">
            <i className="fa-brands fa-apple text-2xl text-black mr-2 flex justify-center items-center font-varela"></i>
            Login with Apple
          </button>
        </div>

        
        <p className="mt-6 md:mt-8 text-gray-600 text-xs md:text-base text-center w-full font-varela">
          Don’t have an account yet? <Link to="/registerationForm" className="text-blue-500 hover:underline font-varela">Register now</Link>
        </p>

      </div>
    </div>
  );
};

export default LoginPage;
