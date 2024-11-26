

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./footer";

const SuccessPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // Handle logout
  const handleLogout = () => {
    setIsLoading(true); // Show loading state
    localStorage.clear();
    setIsLoading(false); // Hide loading state
    navigate("/login"); // Redirect to login page after logout
  };

  // Handle return to dashboard or main page
  const handleExit = () => {
    navigate("/dashboard"); // Change this to your desired page
  };

  return (
    <div className=" w-full fixed flex flex-col min-h-screen bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 text-white">
      <Navbar />

      <main className="flex flex-col lg:flex-row items-center justify-between flex-grow max-w-6xl mx-auto px-6 lg:px-12 py-12 font-sans">
        {/* Left Section: Text and Buttons */}
        <div className="flex flex-col text-center lg:text-left max-w-lg space-y-6">
          <h1 className="text-4xl font-extrabold leading-tight tracking-wide font-sans text-green-600">
            Congratulations on Your Successful Bonding!
          </h1>
          <p className="text-lg mt-4 font-medium">
            You have successfully completed the bonding process. You can now peaceful log out
          </p>

          <div className="mt-8 space-x-4">
            

            {/* Button to log out */}
            <button
              onClick={handleLogout}
              className="px-6 py-2 text-lg font-medium bg-yellow-500 text-gray-950 rounded-lg shadow-lg hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-300 transition-all duration-300 mt-4 lg:mt-0"
              disabled={isLoading}
            >
              {isLoading ? "Logging out..." : "Log out"}
            </button>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="mt-12 lg:mt-10 lg:ml-32">
          <img
            src="m.jpg" 
            alt="Congratulations"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SuccessPage;
